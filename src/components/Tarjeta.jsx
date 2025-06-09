
import { $cancionActual } from "../store"
import "./Tarjeta.css"
import Favorito from "../components/Favoritos.jsx"



export default function Tarjeta({ song }) {
    const {
        title, author, image, audio, album, _id
    } = song
    const handleClick = () => {
        $cancionActual.set({
            title,
            author,
            imageUrl: image.url,
            album,
            audioURL: audio.url,
            _id,
        })
    }



    return (
        <div className="Tarjeta">
            <img src={image.url} alt="Product Title" className="product-image" />
            <div>
                <h3>{title}</h3>
                <p>{author}</p>
            </div>
            <Favorito song={song} />

            <button onClick={handleClick}>Play</button>
        </div>  

    )
}
