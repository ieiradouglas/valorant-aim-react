import React, {useState} from 'react'
import Header from '../../components/Header/index.js'
import Card from '../../components/Card/index.js'
import Main from '../../components/Main/index.js'
import Load from '../../components/Load/index.js'
/* import Modal from "../../components/Modal/index.js" */

import toast, { Toaster } from 'react-hot-toast';
import copy from "copy-to-clipboard"

import miras from "../../assets/data.json"

function Home() {
    function copyToClipBoard(event){
        copy(event.target.alt);
    }

    const notify = (event) => toast.success(`Copiado`)

    return (
        <>
            <div><Toaster  
                toastOptions={{
                    position:"bottom-left",
                   style:{
                    padding:"10px",
                    fontSize:"1rem"
                   } 
                }}
            /></div>
            <Header/>
            <Load/>
            <Main>
                {
                    miras.crosshair.map(mira=>
                    <Card 
                        onClick={(event)=>{copyToClipBoard(event);notify()}}
                        key={mira.nome}
                        src={mira.src}
                        name={mira.nome}
                        alt={mira.alt}
                        cod={mira.codigo}
                    />)
                }
            </Main>
        </>
    ) 
}

export default Home