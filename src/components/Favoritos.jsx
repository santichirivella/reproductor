
import React, { useState, useEffect } from 'react';
import { $favoritesSongs } from '../store';

const FavoriteButton = ({ song }) => { 
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Cargar favoritos desde localStorage al iniciar
    const stored = localStorage.getItem('favoritesSongs');
    if (stored) {
      $favoritesSongs.set(JSON.parse(stored));
    }
    const songs = $favoritesSongs.get();
    if (songs.length > 0 && songs.find(songState => songState._id == song._id)) {
      setIsFavorite(true);
    }
    }, [song._id]);

    useEffect(() => {
    // Guardar favoritos en localStorage cuando cambian
    const unsub = $favoritesSongs.subscribe(songs => {
      localStorage.setItem('favoritesSongs', JSON.stringify(songs));
    });
    return () => unsub();
    }, []);

    const handleClick = () => {
    const songs = $favoritesSongs.get();
    if (isFavorite) {
      const filtro = songs.filter(({ _id }) => _id != song._id);
      $favoritesSongs.set([...filtro]);
    } else {
      $favoritesSongs.set([...songs, song]);
    }
    setIsFavorite(state => !state);
    };

  return (
    <button
      onClick={handleClick}
      aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5em',
        color: isFavorite ? 'red' : 'gray', 
        marginLeft: '10px' 
      }}
    >
      {isFavorite ? '❤️' : '♡'} {}
    </button>
  );
};

export default FavoriteButton; 