import React from 'react';
import { $cancionActual } from '../store';


export default function() {

    const [CancionActual, setCancionActual] = React.useState(null)
    React.useEffect(() => {

        $cancionActual.subscribe((estado) => {
            setCancionActual(estado)
            console.log("cancion actualizasa", estado)
        })
    },[])


    

    return (
        <div className="songbar">
            <h2 className="song-title">{ CancionActual ? CancionActual.title : "" }</h2>

            <h2 className="artist-name">{ CancionActual ? CancionActual.author : ""}</h2>
        
            <img src="imageURl" alt="Song Cover" className="song-image" />
            
            
           
        </div>
    )
}
