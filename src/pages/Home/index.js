import React from 'react'
import Header from '../../components/Header/index.js'
import Card from '../../components/Card/index.js'
import Main from '../../components/Main/index.js'
import Modal from "../../components/Modal/index.js"

import {getCrosshair} from "../../firebase/mira.js"

function Home() {

    async function fetchAim(){
        return getCrosshair().then(aims => console.log(aims))
    }

    let miras = fetchAim();

    console.log(miras)
    
    return (
        <>
            <Header/>
            <Main>
                {/* <Modal/> */}
                {/* {miras.map(mira=>
                    <Card 
                        src={mira.src}
                        name={mira.nome}
                        alt={mira.alt}
                    />
                )} */}
            </Main>
        </>
    ) 
}

export default Home