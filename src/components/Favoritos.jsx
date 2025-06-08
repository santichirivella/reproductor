
import React, { useState, useEffect } from 'react';

const FavoriteButton = ({ songId }) => { 
  const [isFavorite, setIsFavorite] = useState(false);

  
  useEffect(() => {
    try {
      const favorites = JSON.parse(localStorage.getItem('my_music_favorites') || '[]');
      
      setIsFavorite(favorites.includes(songId));
    } catch (error) {
      console.error("Error al leer favoritos de localStorage:", error);
     
    }
  }, [songId]); 

  
  const handleClick = () => {
    let favorites = [];
    try {
     
      favorites = JSON.parse(localStorage.getItem('my_music_favorites') || '[]');
    } catch (error) {
      console.error("Error al parsear favoritos de localStorage:", error);
      favorites = []; 
    }

    if (isFavorite) {
     
      favorites = favorites.filter(id => id !== songId);
    } else {
      
      if (!favorites.includes(songId)) {
        favorites.push(songId);
      }
    }

    try {
   
      localStorage.setItem('my_music_favorites', JSON.stringify(favorites));
     
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error al guardar favoritos en localStorage:", error);
    }
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