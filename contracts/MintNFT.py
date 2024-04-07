import smartpy as sp

@sp.module
def main():
    # Creating the NFTs list data structure
    NFT_list: type = sp.map[
            sp.int, sp.record(owner=sp.address, price=sp.nat, hash=sp.string, metadata=sp.record(
                name = sp.string,
                desc = sp.string,
                img = sp.string,
            ))
        ]
    
    class MintNFT(sp.Contract):        
        def __init__(self, data):
            # This will essentailly be the MINT function (creation of the NFT)
            self.data.nft_data = sp.cast(data, NFT_list)

        @sp.entrypoint
        def transfer(self, new_owner, args):
            assert sp.sender == self.data.owner, "YOU ARE NOT THE OWNER!"
            assert sp.sender != new_owner, "YOU ALREADY OWN THIS ASSET!!"
            # --> The owner can't re-transfer the  NFT to himself
            self.data.owner = new_owner

        @sp.entrypoint
        def change_price(self, new_price):
            assert sp.sender == self.data.owner, "YOU ARE NOT THE OWNER!"
            self.data.price = new_price

        #@sp.entrypoint
        #def burn(self):
            #self.data.owner = new_owner
 

@sp.add_test()
def test():
   ayed = sp.test_account("ayed")
   olive = sp.test_account("olive")
   aziz = sp.test_account("aziz")
   Leon = sp.test_account("Leon")
   harold = sp.test_account("harold")


   NFT_list = {
    1: sp.record(owner=ayed, price=7, hash="tz5Wj38T9vnZFzoFd3tQHJxPBdvPUne6bLoZ", metadata=sp.record(name="Charizard", desc="Fire Dragon", img="ipfs://QmsfdjsghJHBJHhjdhHDVQSNboghtjcxz")),
    2: sp.record(owner=olive, price=5, hash="tzpoj38T9vnfdgzoFd3tQHJxPBdvPUne6bLoZ", metadata=sp.record(name="Evee", desc="Fire Dragon", img="ipfs://QmsfdjsghJHBJHhjdhHDVQSNboghtjcx")),
    3: sp.record(owner=aziz, price=4, hash="tdsWj38T9vnZFzosdf3tQHJxPBdvPUne6bLoZ", metadata=sp.record(name="Evee", desc="Fire Dragon", img="ipfs://QmsfdjsghfdshJHhjdhHDVQSNboghtjcx")),
    4: sp.record(owner=Leon, price=2, hash="tfdgSj38T9vnZFzoFsdtQHJxPBdvPUne6bLoZ", metadata=sp.record(name="Mew Two", desc="Fire Dragon", img="ipfs://QmsfdjsghfhtyJHhjdhHDVQSNboghtjcx")),
    5: sp.record(owner=harold, price=8, hash="tfdgj38T9vnZFzogftQHJxPBdvPUne6bLoZ", metadata=sp.record(name="Rayquaza", desc="Fire Dragon", img="ipfs://QmdjsghJHBJHhjdhHDVhgjNboghtjcx"))
   }

   scenario = sp.test_scenario("Test", main)
   contract = main.MintNFT(NFT_list)
   scenario += contract

   contract.transfer(_sender=ayed, nftId=1, new_owner=olive, _valid=True)
   scenario.verify(contract.data.NFT_list[2].owner == olive)
