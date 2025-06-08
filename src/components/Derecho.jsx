import React from 'react';
import { $cancionActual } from '../store';
import "./Derecho.css";

export default function() {

    const [CancionActual, setCancionActual] = React.useState(null)
    React.useEffect(() => {

        $cancionActual.subscribe((estado) => {
            setCancionActual(estado)
            console.log("cancion actualizasa", estado)
        })
    },[])


    

    return (
        <div className="Derecho">
            <h2 className="song-title">{ CancionActual ? CancionActual.title : "no hay cancion seleccionada" }</h2>
            <audio src={CancionActual ? CancionActual.audioURL: ""} autoPlay></audio>

            <h2 className="artist-name">{ CancionActual ? CancionActual.author : "no hay autor"}</h2>
            <p className="album-name">{ CancionActual ? CancionActual.album : " no hay album"} </p>
           
            



            <img src="https://via.placeholder.com/150" alt="Song Cover" className="song-image" />
            
            
           
        </div>
    )
}

    
