import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { $showingFavorites } from '../store.js';
import Tarjeta from './Tarjeta';

const SongList = ({ allSongs }) => {
  const showingFavorites = useStore($showingFavorites);
  const [favoriteSongIds, setFavoriteSongIds] = useState([]);

  useEffect(() => {
    console.log("SongList mounted. Initial allSongs:", allSongs); 
    if (allSongs && allSongs.length > 0) {
      console.log("SongList: Primer song._id de allSongs:", allSongs[0]._id);
    } else {
      console.log("SongList: allSongs is empty or not an array on mount.");
    }
  }, []); 


  useEffect(() => {
    const loadFavorites = () => {
      try {
        const favorites = JSON.parse(localStorage.getItem('my_music_favorites') || '[]');
        setFavoriteSongIds(favorites);
        console.log("SongList: Favoritos cargados de localStorage:", favorites); 
      } catch (error) {
        console.error("SongList: Error al leer favoritos de localStorage:", error);
        setFavoriteSongIds([]);
      }
    };

    loadFavorites();
    window.addEventListener('storage', loadFavorites);
    return () => {
      window.removeEventListener('storage', loadFavorites);
    };
  }, []);

 
  useEffect(() => {
    console.log("SongList: showingFavorites actual:", showingFavorites);
    console.log("SongList: favoriteSongIds actual:", favoriteSongIds);
   
    const currentSongsToDisplay = showingFavorites
      ? allSongs.filter(song => favoriteSongIds.includes(song._id))
      : allSongs;

    console.log("SongList: songsToDisplay antes de map:", currentSongsToDisplay);
    if (!Array.isArray(currentSongsToDisplay)) {
      console.error("CRITICAL ERROR: songsToDisplay IS NOT AN ARRAY!");
    }
  }, [showingFavorites, favoriteSongIds, allSongs]);


  const songsToDisplay = showingFavorites
    ? allSongs.filter(song => favoriteSongIds.includes(song._id))
    : allSongs;

  if (showingFavorites && songsToDisplay.length === 0) {
    return <p>Aún no tienes canciones favoritas. ¡Haz clic en el ❤️ para añadir algunas!</p>;
  }

  
  return (
    <>
      {}
      {Array.isArray(songsToDisplay) && songsToDisplay.map(song => (
        <Tarjeta
          key={song._id}
          title={song.title}
          author={song.author}
          imageUrl={song.image.url}
          album={song.album}
          audioURL={song.audio.url}
          _id={song._id}
        />
      ))}
    </>
  );
};

export default SongList;
