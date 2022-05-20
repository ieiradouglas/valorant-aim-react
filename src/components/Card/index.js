
function Card({name, src, alt}) {
    return (
        <>
           <figure id="mira1" class="aim-block">
              <img class="aim-img" src={src}/>
              <figcaption class="aim-description">{name}</figcaption>
            </figure>        
        </>
    )
}

export default Card