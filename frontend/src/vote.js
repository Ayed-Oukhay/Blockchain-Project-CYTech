import 'bootstrap/dist/css/bootstrap.css';
import './vote.css';
import React, { useState, useEffect } from "react";

function Vote() {
    return (
        <div className="wrapper">

            <header>
                <center><h1>Welcome to the DOscars 🏆</h1></center>
                <center><h3> Vote for your favourite actor this season 🎬</h3></center>
            </header>

            <div className="content-center">
                <div class="grid-container">
                    <div class="grid-item">
                        <section>
                            <div class="card">
                                <img src={require('./imgs/Ryan_Gosling.jpg')} alt="Avatar" />
                                <div class="container">
                                    <h4><b>Ryan Gosling</b></h4>
                                    <center><button type="button" class="btn btn-primary"><i className="tim-icons icon-check-2" /> Vote </button></center>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="grid-item">
                        <section>
                            <div class="card">
                                <img src={require('./imgs/denzel.PNG')} alt="Avatar" />
                                <div class="container">
                                    <h4><b>Denzel Washington</b></h4>
                                    <center><button type="button" class="btn btn-primary"><i className="tim-icons icon-check-2" /> Vote </button></center>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="grid-item">
                        <section>
                            <div class="card">
                                <img src={require('./imgs/emma.jpg')} alt="Avatar" />
                                <div class="container">
                                    <h4><b>Emma Stone</b></h4>
                                    <center><button type="button" class="btn btn-primary"><i className="tim-icons icon-check-2" /> Vote </button></center>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="grid-item">
                        <section>
                            <div class="card">
                                <img src={require('./imgs/leo.jpg')} alt="Avatar" />
                                <div class="container">
                                    <h4><b>Leonardo DeCaprio</b></h4>
                                    <center><button type="button" class="btn btn-primary"><i className="tim-icons icon-check-2" /> Vote </button></center>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="grid-item">
                        <section>
                            <div class="card">
                                <img src={require('./imgs/timothee.jpg')} alt="Avatar" />
                                <div class="container">
                                    <h4><b>Timothée Chalamet</b></h4>
                                    <center><button type="button" class="btn btn-primary"><i className="tim-icons icon-check-2" /> Vote </button></center>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="grid-item">
                        <section>
                            <div class="card">
                                <img src={require('./imgs/rebecca.jpg')} alt="Avatar" />
                                <div class="container">
                                    <h4><b>Rebecca Furgeson</b></h4>
                                    <center><button type="button" class="btn btn-primary"><i className="tim-icons icon-check-2" /> Vote </button></center>
                                </div>
                            </div>
                        </section>
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