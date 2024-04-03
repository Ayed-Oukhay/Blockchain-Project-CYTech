# Blockchain-Project-CYTech

## Description:
This project is a Decentralized Application (DApp) designed for voting in the Oscars. Within the application, users will find a list of nominees. 
Each participant will be allowed to cast a single vote for their preferred actor.

## To run the frontend app:
1) Go into the /frontend folder in the terminal (cmd)
2) Run the following command `npm install`
3) Run `npm start`

## Tools:
- `SmartPy`
- `React`
- `Temple Wallet`
### Libraries:
- `Taquito library`: allows us to interact with the smart contract deployed on the blockchain
- `Beacon Wallet`: allows us to connect and interact with whatever wallet we’re using

## RQ: 
To make things more simple, the smart contract is already deployed outside the project, we then just call it and interact with it using its address and the `taquito` library.
You can find its code in ./contract

## Functions to be added:
- Adding a time limit for voting
- Announcing that the time for voting is up
- Announcing a winner
- ...