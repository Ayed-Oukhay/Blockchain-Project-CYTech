import 'bootstrap/dist/css/bootstrap.css';
import './vote.css';
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";
import { CONTRACT_ADDRESS, RPC_URL } from "./utils/env";
import { useEffect, useState, useRef } from "react";

function Vote() {
    // --- Initialising a Tezos instance on the Ghostnet ---
    const Tezos = new TezosToolkit(RPC_URL);

    // --- Authenticating the user on page load ---
    const user_wallet = useRef(null);  // * -> This will contain the address of the connected user's wallet later on
    const [message, setMessage] = useState(""); // * -> Keeps track of messages to show to users within the dApp

    // * --------- Connecting the user using ConnectWallet whenever the page loads ---------
    const connectWallet = async () => {
        setMessage("");
        try {
            const options = {
                name: "DOscars",
                network: { type: "ghostnet" },
            };
            const wallet = new BeaconWallet(options);
            user_wallet.current = wallet;
            await wallet.requestPermissions();
            Tezos.setProvider({ wallet: user_wallet.current });
        } catch (error) {
            console.error(error);
            setMessage(error.message);
        }
    };
    // !! ERROR HERE

    return (
        <div className="wrapper">

            <header>
                <center><h1>Welcome to the DOscars 🏆</h1></center>
                <center><h3> Vote for your favourite actor this season 🎬</h3></center>
            </header>

            <div className="content-center">

                <div class="row row-cols-3 g-3">
                    <div class="col">
                        <div class="card">
                            <img src={require('./imgs/Ryan_Gosling.jpg')} class="card-img-top"
                                alt="Hollywood Sign on The Hill" />
                            <div class="card-body">
                                <center><h5 class="card-title">Ryan Gosling</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('./imgs/denzel.PNG')} class="card-img-top"
                                alt="Palm Springs Road" />
                            <div class="card-body">
                                <center><h5 class="card-title">Denzel Washington</h5> </center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('./imgs/emma.jpg')} class="card-img-top"
                                alt="Los Angeles Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Emma Stone</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('./imgs/leo.jpg')} class="card-img-top"
                                alt="Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Leonardo DeCaprio</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('./imgs/timothee.jpg')} class="card-img-top"
                                alt="Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Timothée Chalamet</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('./imgs/rebecca.jpg')} class="card-img-top"
                                alt="Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Rebecca Furgeson</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <center><h6>Created with ❤️ on the Tezos Blockchain ♾️</h6></center>
            </footer>
        </div>

    );
}

export default Vote;