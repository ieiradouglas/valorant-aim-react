import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Main from '../../components/Main'

function Home() {
    return (
        <>
            <Header/>
            <Main>
                <Card 
                    src="https://i.picsum.photos/id/492/200/300.jpg?hmac=qSBjlTNMOPN_ejfPwtAFG_nI_v4XCzpwib3c4miH4fM"
                    name="Mirinha"
                />
                <Card 
                    src="https://i.picsum.photos/id/186/200/300.jpg?hmac=OcvCqU_4x7ik3BASnw4WmwKaS-Sv167Nmf5CJoTrIUs"
                    name="Mirinha"
                />
            </Main>
        </>
    ) 
}

export default Home