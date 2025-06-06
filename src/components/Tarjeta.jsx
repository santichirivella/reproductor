

export default function Tarjeta({
    title, author, imageUrl, audioURL, album

}) {

    const handleClick = () => {
        console.log("click en la cancion");
        


    }


    return (
        <div class="product-card">
            <h2 class="product-title">{title}</h2>
            <img src={imageUrl} alt="Product Title" class="product-image" />
            <h2 class="artista">{author}</h2>
            
            <p class="album">Álbum: {album}</p>
            <button onClick={handleClick}>play</button>
        </div>


    )
}