import React, { Component } from 'react';
import App from './App.js'

import './Stylesheets/navbar.css';
import './Stylesheets/background-items.css';
import './Stylesheets/container.css';

import logo from "./tm1.svg";

class MainApp extends React.Component {

    render() {

        return (
            // <!-- NAVBAR  --> and Background-Items
            <div>
                <header>
                    <img className="logo" src={logo} alt="logo"/>
                    <nav>
                    <ul className="nav__links">
                        <li className="list-links"><a href="https://wlo.link/@amitK">Willow</a></li>
                        <li className="list-links"><a href="https://github.com/Mr-Amit/Tasksmaster">In Github</a></li>
                        <li className="list-links"><a href="https://mr-amit.github.io/">About</a></li>
                    </ul>
                    </nav>
                    <a className="cta" href="#"><button>Contact</button></a>
                    
                </header>

                <div className="background-items">
                    {/* <!-- GRADIENT SPINNER --> */}
                    <div className="spinner-box">
                    <div className="circle-border">
                        <div className="circle-core"></div>
                    </div>  
                    </div>

                    {/* <!-- SPINNER ORBITS --> */}
                    <div className="spinner-box">
                    <div className="blue-orbit leo">
                    </div>

                    <div className="green-orbit leo">
                    </div>
                    
                    <div className="red-orbit leo">
                    </div>
                    
                    <div className="white-orbit w1 leo">
                    </div><div className="white-orbit w2 leo">
                    </div><div className="white-orbit w3 leo">
                    </div>
                    </div>

                    {/* <!-- GRADIENT CIRCLE PLANES --> */}
                    <div className="spinner-box">
                    <div className="leo-border-1">
                        <div className="leo-core-1"></div>
                    </div> 
                    <div className="leo-border-2">
                        <div className="leo-core-2"></div>
                    </div> 
                    </div>

                    {/* <!-- SPINNING SQUARES --> */}
                    <div className="spinner-box">
                    <div className="configure-border-1">  
                        <div className="configure-core"></div>
                    </div>  
                    <div className="configure-border-2">
                        <div className="configure-core"></div>
                    </div> 
                    </div>

                    {/* <!-- LOADING DOTS... --> */}
                    <div className="spinner-box">
                    <div className="pulse-container">  
                        <div className="pulse-bubble pulse-bubble-1"></div>
                        <div className="pulse-bubble pulse-bubble-2"></div>
                        <div className="pulse-bubble pulse-bubble-3"></div>
                    </div>
                    </div>

                    {/* <!-- SOLAR SYSTEM --> */}
                    <div className="spinner-box">
                    <div className="solar-system">
                        <div className="earth-orbit orbit">
                        <div className="planet earth"></div>
                        <div className="venus-orbit orbit">
                            <div className="planet venus"></div>
                            <div className="mercury-orbit orbit">
                            <div className="planet mercury"></div>
                            <div className="sun"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* <!-- Three Quarter Spinner --> */}

                    <div className="spinner-box">
                    <div className="three-quarter-spinner"></div>
                    </div>
                </div>

                <div>
                    <App />
                </div>
            </div>
            
        );
    }
}
 
export default MainApp;