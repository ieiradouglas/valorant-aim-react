import React from 'react';
import "./index.css";
import Logo from '../../assets/img/logo-valorant.png'

function Header() {
    return(
        <header>
            <div className="header">
                <img className="logo" src={Logo} width='150px' title="Valorant logo" description="Logo do valorant atual."/>
            </div>
        </header>
    )
}

export default Header;