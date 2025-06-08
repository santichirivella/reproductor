import { $cancionActual } from "../store"
import "./Tarjeta.css"



    export default function Tarjeta({
        title, author, imageUrl, audioURL, album

    }) {

        const handleClick = () => {
            $cancionActual.set({
                title,
                author,
                imageUrl,
                album,
                audioURL,
                
            })
        }

        // const handlerClick = () => {
        // if (audioRef.current) {
        //     if (audioRef.current.paused) {
        //         audioRef.current.play()
        //     } else {
        //         audioRef.current.pause()
        //     }
        // }
    // }
        return (
            <div className="Tarjeta">
                <img src={imageUrl} alt="Product Title" className="product-image" />
                <div>
                    <h3>{title}</h3>
                    <p>{author}</p>
                </div>
                <button onClick={handleClick}>Play</button>
                
            </div>
      
        )
    }
