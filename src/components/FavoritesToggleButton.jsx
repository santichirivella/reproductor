
import React from 'react';
import { useStore } from '@nanostores/react'; 
import { $showingFavorites } from '../store.js'; 

const FavoritesToggleButton = () => {
 
  const showingFavorites = useStore($showingFavorites);

  const handleClick = () => {
    
    $showingFavorites.set(!showingFavorites);
    console.log("Alternando vista de favoritos a:", !showingFavorites);
  };

  return (
    <button
      onClick={handleClick} 
      className="favorites-toggle-button" 
    >
      {showingFavorites ? 'Mostrar Todas las Canciones' : 'Ver Favoritos'}
    </button>
  );
};

export default FavoritesToggleButton;