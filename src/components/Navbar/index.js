import React from 'react';
import { Link } from "react-scroll";

import logo from '../../assets/img/logo/logo.png';
import '../../assets/css/navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="wPadrao">
                <Link to="/" className="logoais">
                    <img src={logo} alt="Logo AIS"/>
                </Link>
                <div className="menu">
                    <div>
                        {/* Comprar */}
                    </div>
                    <Link to="caracteristicas" className="">
                        Características
                    </Link>
                    <Link to="vantagens" className="">
                        Vantagens
                    </Link>
                </div>
            </nav>
            <div className="wPadrao">
                <h1 className="titulo"> TechBOARD </h1>
                <div>
                    <p className="sub-titulo">
                        Experimente a realidade virtual de forma<br />
                        simples,divertida e acessível
                    </p>
                </div>
            </div>
        </>
    );
};
