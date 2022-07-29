import React, {useState} from 'react'
import Header from '../../components/Header/index.js'
import Card from '../../components/Card/index.js'
import Main from '../../components/Main/index.js'
import Load from '../../components/Load/index.js'
import Notification from "../../components/notification/index.js"
/* import Modal from "../../components/Modal/index.js" */

import miras from "../../assets/data.json"

function Home() {
    let complete = true;

    setTimeout(()=>{
        complete = false;
        console.log(complete)
    },4000)

    return (
        <>
            <Header/>
            <Load/>
            <Main>
                {
                    miras.crosshair.map(mira=>
                    <Card 
                        key={mira.nome}
                        src={mira.src}
                        name={mira.nome}
                        alt={mira.alt}
                        cod={mira.codigo}
                    />)
                }
            </Main>
            <Notification />
        </>
    ) 
}

export default Home