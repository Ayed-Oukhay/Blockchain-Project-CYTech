import 'bootstrap/dist/css/bootstrap.css';
import '../style/vote.css';


function Vote() {
    // --- Initialising a Tezos instance on the Ghostnet ---
    // const Tezos = new TezosToolkit(RPC_URL);

    // --- Authenticating the user on page load ---
    
    // * --------- Connecting the user using ConnectWallet whenever the page loads ---------
    
    // !! ERROR HERE

    return (
        <div className="wrapper">

            <header>
                <center><h1>STEP 2: Go through the list and vote for your favourite NFT </h1></center>
            </header>

            <br />
            <center>
            <div className="content">
                <div class="row row-cols-5 g-5">
                    <div class="col">
                        <div class="card">
                            <img src={require('../imgs/charizard.png')} class="card-img-top"
                                alt="Hollywood Sign on The Hill" />
                            <div class="card-body">
                                <center><h5 class="card-title">Charizard </h5></center>
                                <center><h5 class="card-title">Votes: 0</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('../imgs/pikachu.jpg')} class="card-img-top"
                                alt="Hollywood Sign on The Hill" />
                            <div class="card-body">
                                <center><h5 class="card-title">Pikachu</h5></center>
                                <center><h5 class="card-title">Votes: 0</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('../imgs/poke2.jpg')} class="card-img-top"
                                alt="Palm Springs Road" />
                            <div class="card-body">
                                <center><h5 class="card-title">Totodile</h5> </center>
                                <center><h5 class="card-title">Votes: 0</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('../imgs/entei.png')} class="card-img-top"
                                alt="Los Angeles Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Entei</h5></center>
                                <center><h5 class="card-title">Votes: 0</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('../imgs/poke3.jpg')} class="card-img-top"
                                alt="Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Blastoise</h5></center>
                                <center><h5 class="card-title">Votes: 0</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('../imgs/poke6.jpg')} class="card-img-top"
                                alt="Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Tyranitar</h5></center>
                                <center><h5 class="card-title">Votes: 0</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('../imgs/poke8.jpg')} class="card-img-top"
                                alt="Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Umbreon</h5></center>
                                <center><h5 class="card-title">Votes: 0</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('../imgs/poke5.png')} class="card-img-top"
                                alt="Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Vaporeon</h5></center>
                                <center><h5 class="card-title">Votes: 0</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('../imgs/lugia.jpg')} class="card-img-top"
                                alt="Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Lugia</h5></center>
                                <center><h5 class="card-title">Votes: 0</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('../imgs/poke9.png')} class="card-img-top"
                                alt="Skyscrapers" />
                            <div class="card-body">
                                <center><h5 class="card-title">Bayleef</h5></center>
                                <center><h5 class="card-title">Votes: 0</h5></center>
                                <br />
                                <center><button type="button" class="btn btn-info"><i className="tim-icons icon-check-2" /> Vote </button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </center>
            <br /><br />
            <footer>
                <center><h6>Created with ❤️ by CY Tech students on the Tezos Blockchain ♾️</h6></center>
            </footer>
        </div>

    );
}

export default Vote;