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
            <h2 className="song-title">{ CancionActual ? CancionActual.title : "no hay cancion seleccionada" }</h2>
            <audio src={CancionActual ? CancionActual.audioURL: ""} autoPlay></audio>



            {/* <img src="https://via.placeholder.com/150" alt="Song Cover" className="song-image" />
            
            <h2 className="artist-name">Artist Name</h2>
            <p className="album-name">Album Name</p>
            <button className="play-button">Play</button> */}
        </div>
    )
}