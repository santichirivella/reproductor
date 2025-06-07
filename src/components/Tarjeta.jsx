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

    const handlerClick = () => {
        $cancionActual.set(null)
    }
           
        return (
           <div className="song">
            <img src={imageUrl} alt="Product Title" class="product-image" />
            <div>
                <h3>{title}</h3>
                <p>{author}</p>
            </div>
            <button onClick={handleClick}>play</button>
            <button onClick={handlerClick}>pause</button>
            </div>


        )
    }
     
  
