## Description:
This project is a Decentralized Application (DApp) allowing users to create Pokemon NFTs then vote for their favorite one created by other users. 
Each participant will be allowed to cast a single vote for their preferred Pokemon.

## To run the frontend app:
1) Go into the /frontend folder in the terminal (cmd)
2) Run the following command `npm install`
3) Run `npm start`

## Tools:
- `SmartPy`
- `React`
- `Temple Wallet` (ERROR while implementing the code to link the project with Temple)
- `Metamask` (Trying to use a snap of the Tezos Blockchain on Metamask to connect the wallet)
### Libraries:
- `Taquito library`: allows us to interact with the smart contract deployed on the blockchain
- `Beacon Wallet`: allows us to connect and interact with whatever wallet we’re using

## RQ: 
To make things more simple, the smart contract is already deployed outside the project, we then just call it and interact with it using its address and the `taquito` library.
You can find its code in ./contract

## Things to improve / Functions to be added:
- Completing the Temple Wallet connection
- Connecting the app to `IPFS (Pinata)` to store the NFTs metadata (exp image)
- Implementing the `FA2` standard instead of hard coding everything in the NFT smart contract from scratch
- Adding a time limit for voting
- Announcing that the time for voting is up
- Announcing a winner
- ...

## Some Screenshots:

- Creating the smart contracts `NFT smart contract` and `Vote smart contract`

![NFTContract](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/a67b558d-5304-4f59-b1d9-d9d1c4c0a0e7)

![VoteContract](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/70af273e-7c82-42d9-9aa9-f0ffebadb9d9)

- Testing the Vote Smart contract:

![Runningthesmartcontract](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/5195293a-7b3d-4a1d-bfbe-f6197950d3ac)

![Runningthesmartcontract2](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/e992a417-f22c-4639-9047-448bb4f37c82)

![Runningthesmartcontract3](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/77bab314-dfcf-485c-9276-908a62fe7c5a)

![Runningthesmartcontract4](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/0bee2f72-893b-4d9e-82d3-819ae1106021)

- Trying to deploy the Vote smart contract (SmartPy ERROR!!)
  
![deployingthesmartcontract](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/085b8edf-392c-4cc2-9fab-d8555524e261)

![deployingthesmartcontract2](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/dae3b0e8-8266-4e50-8105-6ef975c106db)

- Creating a Temple wallet account:

![templewallet](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/e7d85184-693b-44be-bead-01a67c5ff477)

## UI screenshots:

![app-page1](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/2445d271-ae82-4669-b62d-c629b12956c1)

![CreatinganNFT](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/a3fe7cd8-5416-41f0-a067-3368cd73dabd)

![app-page-2](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/c6a5e36f-6d0e-4530-8dbc-0f4aa9234beb)

![added-wallet-connect](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/c346c938-417e-4e09-a815-c4d5269f879d)

### Trying to implement Authentication to the app on the Tezos Blockchain using the Beacon wallet (ERROR) :

![TezosWalletIntegrationError](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/7183ad5d-5335-4a91-9e65-64d54702df47)

### Testing connection with Metamask (connection to the wallet working but not on the Tezos Blockchain) :

![connecting-wallet](https://github.com/Ayed-Oukhay/Blockchain-Project-CYTech/assets/65503307/8fb767b3-74bf-43dc-b8e1-82755c0d8cd6)

