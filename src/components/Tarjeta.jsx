import { $cancionActual } from "../store"
import { $pausar } from "../store"


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

    const handlerClick = () => {
        $pausar.set(true)
    }

    return (
        <div className="song">
            <img src={imageUrl} alt="Product Title" className="product-image" />
            <div>
                <h3>{title}</h3>
                <p>{author}</p>
            </div>
            <button onClick={handleClick}>Play</button>
            <button onClick={() => { audioURL.set(false); }}>Pause</button>
        </div>
    )
}


