import React, {useState } from 'react';


import "./index.css"
import cp from "../../assets/img/copy.svg"


function Card({name, src, alt, cod, onClick}) {
    
    return (
        <>
           <figure id="mira1" className="aim-block">
                <img className="copy-img" src={cp}  onClick={onClick} legend="mira" alt={cod}/>
                <img className="aim-img" src={src} alt={alt}/>
                <figcaption className="aim-description">{name}</figcaption>
            </figure>        
        </>
    )
}

export default Card