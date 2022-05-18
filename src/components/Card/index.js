import './style.css'

function Card({name, src, alt}) {
    return (
        <>
            <img class="imagem" src={src} alt={alt}/>
            <h3>{name}</h3>        
        </>
    )
}

export default Card