import smartpy as sp

@sp.module
def main():
    # Creating the NFTs list data structure
    NFT_list: type = sp.map[
            sp.int, sp.record(owner=sp.address, hash=sp.string, metadata=sp.record(
                name = sp.string,
                desc = sp.string
                img = sp.string,
            ), price=sp.tez)
        ]
    
    class MintNFT(sp.Contract):        
        def __init__(self, NFT_list, price):
            sp.cast(price, sp.set[sp.mutez])
            self.data.owner = owner
            self.data.metadata = metadata
            self.data.price = price

        @sp.entrypoint
        def mint(self, new_owner):
            self.data.owner = new_owner

        @sp.entrypoint
        def transfer(self, new_add):
            assert sp.sender == self.data.owner, "YOU ARE NOT THE OWNER!"
            self.data.owner = new_add

        @sp.entrypoint
        def change_price(self, new_price):
            assert sp.sender == self.data.owner, "YOU ARE NOT THE OWNER!"
            self.data.price = new_price

        @sp.entrypoint
        def burn(self):
            #self.data.owner = new_owner

        @sp.entrypoint
        def default(self):
            

@sp.add_test()
def test():