import React, {useState} from 'react';
import copy from "copy-to-clipboard"

import "./index.css"
import cp from "../../assets/img/copy.svg"

function Card({name, src, alt, cod}) {
    const [copyText, setCopyText] = useState('');
   
    function copyToClipBoard(codigo){
        setCopyText(codigo)
        copy(copyText);
        console.log(`Você copiou ${copyText}`)
    }

    return (
        <>
           <figure id="mira1" className="aim-block">
                <img className="copy-img" onClick={()=>copyToClipBoard(cod)} src={cp} alt={cod}/>
                <img className="aim-img" src={src} alt={alt}/>
                <figcaption className="aim-description">{name}</figcaption>
            </figure>        
        </>
    )
}

export default Card