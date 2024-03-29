import smartpy as sp

@sp.module
def main():
    class MintNFT(sp.Contract):
        def __init__(self, owner, metadata, description, price):
            sp.cast(price, sp.set[sp.mutez])
            self.data.owner = owner
            self.data.metadata = metadata
            self.data.description = description
            self.data.price = price

        @sp.entrypoint
        def mint(self, new_owner):
            self.data.owner = new_owner

@sp.add_test()
def test():