import React, {useState} from 'react'
import Header from '../../components/Header/index.js'
import Card from '../../components/Card/index.js'
import Main from '../../components/Main/index.js'
/* import Modal from "../../components/Modal/index.js" */

import {getCrosshair} from "../../firebase/mira.js"

function Home() {

    const [miras, setMiras] = useState([]);

    function fetchAims() {
        return getCrosshair().then(mira => mira)
    }

    async function start(){
        let dados = await fetchAims();
        {setMiras(dados)}
    }
    
    start();

    return (
        <>
            <Header/>
            <Main>
                {
                miras.map(mira=>
                    <Card 
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