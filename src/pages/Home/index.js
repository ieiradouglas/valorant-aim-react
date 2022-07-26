import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Main from '../../components/Main'

import getCrosshair from "../../assets/data/miras"

import Modal from "../../components/Modal"

let miras = await getCrosshair();

function Home() {
    return (
        <>
            <Header/>
            <Main>
                {/* <Modal/> */}
                {miras.map(mira=>
                    <Card 
                        src={mira.src}
                        name={mira.nome}
                        alt={mira.alt}
                    />
                )}
            </Main>
        </>
    ) 
}

export default Home