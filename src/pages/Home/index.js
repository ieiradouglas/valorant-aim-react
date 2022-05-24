import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Main from '../../components/Main'
import miras from "../../assets/data/miras"

function Home() {
    return (
        <>
            <Header/>
            <Main>
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