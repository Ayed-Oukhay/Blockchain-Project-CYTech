import logo from '../imgs/pokeball.png';
import { useEffect, useState, useRef } from "react";
import Web3 from 'web3';

// --- Trying out the Beacon wallet ---
// import { BeaconWallet } from "@taquito/beacon-wallet";
// import { TezosToolkit } from "@taquito/taquito";
// import { CONTRACT_ADDRESS, RPC_URL } from "../utils/snaps";
// -------------------------------------

const Login = (props) => {
  const [isConnecting, setIsConnecting] = useState(false); //used to check if the user is connecting or not to display different messages
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null); // We'll use this to get the current connected account
  const [currentBalance, setCurrentBalance] = useState(0); // We'll use this to get the account balance of the connected user

  // --- Initialising a Tezos instance on the Ghostnet ---
  // const Tezos = new TezosToolkit(RPC_URL);

  // --- Authenticating the user on page load ---
  // const user_wallet = useRef(null);  // * -> This will contain the address of the connected user's wallet later on
  // const [message, setMessage] = useState(""); // * -> Keeps track of messages to show to users within the dApp

  // ! ERROR HERE --------- Connecting the user using ConnectWallet whenever the page loads ---------
  // const connectWallet = async () => {
  //   setMessage("");
  //   try {
  //     const options = {
  //       name: "PokeVote",
  //       network: { type: "ghostnet" },
  //     };
  //     const wallet = new BeaconWallet(options);
  //     user_wallet.current = wallet;
  //     await wallet.requestPermissions();
  //     Tezos.setProvider({ wallet: user_wallet.current });
  //     setIsConnecting(true);
  //   } catch (error) {
  //     console.error(error);
  //     setMessage(error.message);
  //     setIsConnecting(false);
  //   }
  // };
  // !! ERROR HERE

  // -------- Testing with Metamask, just to see if the app works --------	
  // ---------------- For compatibility reasons, we need to check the version of the provider (Metamask) because some browsers still use window.web3 instead of window.ethereum --------------------------
  const detectProvider = () => {
    let provider;
    // ----- Checking tezos provider -----
    if (window.ethereum) {
      provider = window.ethereum;
    } else { // ----- If no provider is found -----
      window.alert("No wallet browser-extension detected! check out your browser extensions!");
    }
    return provider;
  }

  // ------------ Once clicked, this function will change the status of the user to Connected! --------------------
  const AuthBtnClick = async () => {
    const provider = detectProvider();
    if (provider) {

      // ------------------- Cheking if Metamask is installed and detected ------------------- 
      if (provider !== window.ethereum) {
        console.error("Not window.ethereum provider. Do you have multiple wallet installed ?");
      }

      setIsConnecting(true);
      await provider.request({
        method: "eth_requestAccounts",
      });

      setIsConnecting(false);
      setIsConnected(true);
    }
  };

  return (
    <div className="MetaAuth">

      {/* ------------ Login Button -------------- */}
      <button className="btn btn-primary btn-block" onClick={AuthBtnClick}>
        <img src={logo} alt="MetamaskImg" className="metamask-logo" type="button" style={{ height: 30, width: 30 }} /> &nbsp; &nbsp;
        {!isConnecting && "Connect"}
        {isConnecting && "Loading..."}
      </button>
      <h5>
        {!isConnected && ""}
        {isConnected && "User Address"}
      </h5>
      <br />
    </div>
  );

}

export default Login;
