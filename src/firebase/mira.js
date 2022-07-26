import {getDatabase, ref, child, get } from "firebase/database";

import app from "./firebase.js";

const dbRef = ref(getDatabase());

async function getCrosshair(){
    return get(child(dbRef, `crosshair`))
    .then((snapshot) => snapshot.val())
    /* .catch((erro)=>{
        console.log(erro);
    }) */
}

let dados = await getCrosshair();

console.log(dados);

export default getCrosshair();