import smartpy as sp

@sp.module
def main():
    # ----- Creating the structure of the NFT's metadata ------
    pokemon_metadata: type = sp.map[
        sp.int, sp.record(image=sp.string, name=sp.string, desc=sp.string)
    ]

    class PokemonNFT(sp.Contract):
        def __init__(self, owner, metadata):
            self.data.owner = owner
            self.data.metadata = sp.cast(metadata, pokemon_metadata)
            self.data.price = sp.tez(0)

            # Saving the original creator's address
            self.data.creator = owner
            
        @sp.entrypoint
        def transfer(self, new_owner):
            assert sp.sender == self.data.owner, "YOU ARE NOT THE OWNER OF THIS ASSET!!"
            assert sp.sender != new_owner, "YOU ALREADY OWN THIS ASSET!!"
            # --> The owner can't re-transfer the  NFT to himself
            self.data.owner = new_owner

        @sp.entrypoint
        def set_price(self, base_price):
            assert sp.sender == self.data.owner, "YOU ARE NOT THE OWNER OF THIS ASSET!!"
            # --> Once the base price is set, it can't be set again, not even by the owner
            assert self.data.price == sp.tez(0), "YOU CAN'T SET THE BASE PRICE ONCE IT'S ALREADY SET!!"
            self.data.price = base_price
        
        @sp.entrypoint
        def buy(self):
            assert sp.amount == self.data.price, "NOT ENOUGH TEZ!"
            assert sp.sender != self.data.owner, "YOU ALREADY OWN THIS ASSET!!"
            # --> Since the owner can't be the one re-buying the NFT
            
            sp.send(self.data.owner, self.data.price)
            self.data.owner = sp.sender 
            
            # Sending royalties to the creator of the NFT (5%)
            royalties = sp.split_tokens(self.data.price, 5, sp.nat(100))
            sp.trace(royalties)
            sp.send(self.data.creator, royalties)

@sp.add_test()
def test():
   owner = sp.address("tz1Wj38T9vnZFzoFd3tQHJxPBdvPUne6bLoZ")
   buyer1 = sp.address("tz1iq5vn4FTBqjjtzCGG9YwjynDBbqp4qSM1")
   buyer2 = sp.address("tz1VMWeZVcxdP9t7UekXiix4wzqvZw9dZgAD")
   metadata = {
       1: sp.record(
           "image"="https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png",
           "name"="Charizard", 
           "description"="A fiery Pokemon with dragon-like abilities."
       )
    }

    # --- Deploying the contract --- 
   scenario = sp.test_scenario("Test", main) 
   contract = main.PokemonNFT(owner, metadata)
   scenario += contract

   scenario.h3("SCENARIO: Verifying that everything is good to go") 
   scenario.verify(contract.data.owner == owner)
   scenario.verify(contract.data.metadata == metadata) 

   scenario.h3("SCENARIO: Transferring the NFT")
   # --> Transferring the ownership of the NFT (from owner -> buyer1) 
   contract.transfer(buyer1, _sender=owner, _valid=True)
   scenario.verify(contract.data.owner == buyer1)   
   scenario.verify(contract.data.creator == owner)   

   # --> Trying to transfer the token back as the owner
   contract.transfer(owner, _sender=owner, _valid=False, _exception="YOU ARE NOT THE OWNER OF THIS ASSET!!") 

   scenario.h3("SCENARIO: Setting the base price of the NFT")
   # --> Setting the first base price of the NFT 
   contract.set_price(sp.tez(50), _sender=buyer1, _valid=True)
   scenario.verify(contract.data.price == sp.tez(50))

   # --> Trying to change the base price once it's already set
   contract.set_price(sp.tez(75), _sender=buyer1, _valid=False, _exception="YOU CAN'T SET THE BASE PRICE ONCE IT'S ALREADY SET!!")
   scenario.verify(contract.data.price == sp.tez(50))

   scenario.h3("SCENARIO: Buying the NFT") 
   # --> Trying to buy the NFT as the owner
   contract.buy(_sender=buyer1, _amount=sp.tez(50), _valid=False, _exception="YOU ALREADY OWN THIS ASSET!!") 
   # -> Checking that the contract's owner changed to the new owner
   scenario.verify(contract.data.owner == buyer1)

   # ---> Trying to buy with not enough Tez 
   contract.buy(_sender=buyer2, _amount=sp.tez(30), _valid=False, _exception="NOT ENOUGH TEZ!")
   # -> Checking that the contract's owner remains the same
   scenario.verify(contract.data.owner == buyer1)

   # --> Trying to buy with enough Tez
   contract.buy(_sender=buyer2, _amount=sp.tez(50), _valid=True) 
   # -> Checking that the contract's owner changed to the new owner
   scenario.verify(contract.data.owner == buyer2)
