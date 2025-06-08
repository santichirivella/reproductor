
    
 import React from 'react';
 import { $cancionActual } from '../store';
 import "./Songbar.css"


 export default function() {

     const [song, setsong] = React.useState(null)

     const audioRef = React.useRef(null)
    
    
     React.useEffect(() => {

         $cancionActual.subscribe(song => {
             setsong(song)
             console.log("Canción actualizada", song)
         })
     }, [])

     const handlerClick = () => {
         if (audioRef.current) {
             if (audioRef.current.paused) {
                 audioRef.current.play()
             } else {                 audioRef.current.pause()
             }
         }
     }
     

     return (
        
        
             <div ClassName="Songbar">
                 <div ClassName = "songbar-info">
                     <div ClassName="songbar-image">
                         <img src={song ? song.imageUrl : "https://via.placeholder.com/150"} alt="Song Cover" className="song-image" />
                     </div>
                     <div ClassName="songbar-details">
                         <h2 className="song-title">{song ? song.title : "No hay canción seleccionada"}</h2>
                         <h3 className="artist-name">{song ? song.author : "No hay autor"}</h3>
                         <p className="album-name">{song ? song.album : "No hay álbum"}</p>
                     </div>
                 </div>
                 <div ClassName="songbar-controls">
                     <div ClassName="Songbar-controls-buttons"> 
                         <audio src={song ? song.audioURL : ""} ref={audioRef} autoPlay></audio>
                     </div>
                 </div>
                 <div ClassName="songbar-play-pause" onClick={handlerClick}>
                     <button>play</button>
                   
                 </div>
                
             </div>
    
        
     )
 }
