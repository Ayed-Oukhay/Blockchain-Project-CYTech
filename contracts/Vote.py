import smartpy as sp

@sp.module
def main():
    # --- Creating the NFT list data structure ---
    pokemon_list: type = sp.map[
        sp.int, sp.record(name=sp.string, desc=sp.string, votes=sp.nat)
    ]
    
    class PokeVote(sp.Contract):
        # --- Initializing the smart contract with the list of NFTs (pokemons), the list of voters and the admin's address ---
        def __init__(self, pokemons, voters):
            self.data.pokemons = sp.cast(pokemons, pokemon_list)
            self.data.votersAddresses = voters
            # -> The admin will only be able to reset the votes when needed
            self.data.admin = sp.address("tz1fS9QSEgpWwnw9DBBUsLVS2QdDuZW8AbrU")

        @sp.entrypoint
        def vote(self, args):
            # --- Checking if the caller of this function already voted ---
            assert not self.data.votersAddresses.contains(sp.sender), "YOU CAN'T VOTE TWICE!!"
            
            # --- Checking if the pokemon exists in the election list 
            assert self.data.pokemons.contains(args.pokemonId), "POKEMON NOT FOUND!!"
            # -> Increasing their vote count
            self.data.pokemons[args.pokemonId].votes += 1
            # -> Adding the voter (caller of the function) to the list of people who already voted
            self.data.votersAddresses.add(sp.sender)

        @sp.entry_point
        def reset_voting(self):
            assert sp.sender == self.data.admin, "YOU ARE NOT AUTHORIZED"
            # -> Resetting the list of voters
            #self.data.votersAddresses = {}
            # -> Resetting the number of votes for each pokemon
            #self.data.pokemons.values[votes] = sp.nat(0)

@sp.add_test()
def test():
    # --- Creating the voters accounts ---
    ayed = sp.test_account("ayed")
    aziz = sp.test_account("aziz")
    olive = sp.test_account("olive")
    leon = sp.test_account("leon")
    admin = sp.test_account("admin")

    # --- Creating the list of the nominated pokemons ---
    pokemons = {
        1: sp.record(name="Charizard", desc="Fire Dragon", votes=0),
        2: sp.record(name="Mew Two", desc="Psychic", votes=0),
        3: sp.record(name="Pikachu", desc="Thunder", votes=0),
        4: sp.record(name="Evee", desc="Fire", votes=0),
        5: sp.record(name="Rayquaza", desc="Legendary Dragon", votes=0),
        6: sp.record(name="Lugia ", desc="Water Lengendary", votes=0),
    }

    scenario = sp.test_scenario("Test", main)
    contract = main.PokeVote(pokemons, sp.set([admin.address]))
    scenario += contract

    # --- Trying to vote for an existing pokemon ---
    contract.vote(_sender=ayed, pokemonId=2, _valid=True)
    scenario.verify(contract.data.pokemons[2].votes == 1)

    # --- Trying to vote again for the same pokemon NFT but with a different account, and checking if the vote count increases ---
    contract.vote(_sender=aziz, pokemonId=2, _valid=True)
    scenario.verify(contract.data.pokemons[2].votes == 2)

    # --- Trying to vote with a user that already voted ---
    contract.vote(_sender=aziz, pokemonId=2, _valid=False, _exception="YOU CAN'T VOTE TWICE!!")

    # --- Voting for another pokemon NFT ---
    contract.vote(_sender=leon, pokemonId=4, _valid=True)
    scenario.verify(contract.data.pokemons[4].votes == 1)

    # --- Trying to vote for a pokemon NFT that's not on the list ---
    contract.vote(_sender=olive, pokemonId=7, _valid=False, _exception="POKEMON NOT FOUND!!")
