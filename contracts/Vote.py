import smartpy as sp

@sp.module
def main():
    # --- Creating the Candidates list data structure ---
    candidates_list: type = sp.map[
        sp.int, sp.record(name=sp.string, movie=sp.string, votes=sp.nat)
    ]
    
    class Oscars(sp.Contract):
        # --- Initializing the smart contract with the list of candidates (actors), the list of voters and the admin's address ---
        def __init__(self, candidates, voters):
            self.data.candidates = sp.cast(candidates, candidates_list)
            self.data.votersAddresses = voters
            # -> The admin will only be able to reset the votes when needed
            self.data.admin = sp.address("tz1fS9QSEgpWwnw9DBBUsLVS2QdDuZW8AbrU")

        @sp.entrypoint
        def vote(self, args):
            # --- Checking if the caller of this function already voted ---
            assert not self.data.votersAddresses.contains(sp.sender), "YOU CAN'T VOTE TWICE!!"
            
            # --- Checking if the candidate exists in the election list 
            assert self.data.candidates.contains(args.candidateId), "CANDIDATE NOT FOUND!!"
            # -> Increasing their vote count
            self.data.candidates[args.candidateId].votes += 1
            # -> Adding the voter (caller of the function) to the list of people who already voted
            self.data.votersAddresses.add(sp.sender)

        @sp.entry_point
        def reset_voting(self):
            assert sp.sender == self.data.admin, "YOU ARE NOT AUTHORIZED"
            # -> Resetting the list of voters
            #self.data.votersAddresses = {}
            # -> Resetting the number of votes for each candidate
            #self.data.candidates.values[votes] = sp.nat(0)

@sp.add_test()
def test():
    # --- Creating the voters accounts ---
    ayed = sp.test_account("ayed")
    aziz = sp.test_account("aziz")
    olive = sp.test_account("olive")
    leon = sp.test_account("leon")
    admin = sp.test_account("admin")

    # --- Creating the list of the nominated acotrs ---
    candidates = {
        1: sp.record(name="Ryan Gosling", movie="La La Land", votes=0),
        2: sp.record(name="Denzel Washington", movie="The Equalizer", votes=0),
        3: sp.record(name="Emma Stone", movie="Little things", votes=0),
        4: sp.record(name="Leonardo DeCaprio", movie="Flower Moon", votes=0),
        5: sp.record(name="Timothée Chalamet", movie="Dune", votes=0),
        6: sp.record(name="Rebecca ", movie="Dune", votes=0),
    }

    scenario = sp.test_scenario("Test", main)
    contract = main.Oscars(candidates, sp.set([admin.address]))
    scenario += contract

    # --- Trying to vote for an existing actor ---
    contract.vote(_sender=ayed, candidateId=2, _valid=True)
    scenario.verify(contract.data.candidates[2].votes == 1)

    # --- Trying to vote again for the same actor but with a different account, and checking if the vote count increases ---
    contract.vote(_sender=aziz, candidateId=2, _valid=True)
    scenario.verify(contract.data.candidates[2].votes == 2)

    # --- Trying to vote with a user that already voted ---
    contract.vote(_sender=aziz, candidateId=2, _valid=False, _exception="YOU CAN'T VOTE TWICE!!")

    # --- Voting for another actor ---
    contract.vote(_sender=leon, candidateId=4, _valid=True)
    scenario.verify(contract.data.candidates[4].votes == 1)

    # --- Trying to vote for an actor that's not on the list ---
    contract.vote(_sender=olive, candidateId=7, _valid=False, _exception="CANDIDATE NOT FOUND!!")