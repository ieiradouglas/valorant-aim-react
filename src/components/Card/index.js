
function Card({name, src, alt}) {
    return (
        <>
           <figure id="mira1" className="aim-block">
              <img className="aim-img" src={src} alt={alt}/>
              <figcaption className="aim-description">{name}</figcaption>
            </figure>        
        </>
    )
}

export default Card