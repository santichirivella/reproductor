import { $cancionActual } from "../store"


export default function Tarjeta({
    title, author, imageUrl, audioURL, album

}) {

    const handleClick = () => {
        $cancionActual.set({
            title,
            author, 
            imageUrl,
            audioURL,
            album,

        })

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
<div>
      <h2>Mi Reproductor de Música</h2>
      <button onClick={handlePlayPause} style={{ fontSize: '2em', cursor: 'pointer' }}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <p>{isPlaying ? 'Reproduciendo...' : 'Pausado'}</p>
    </div>
  );
}
