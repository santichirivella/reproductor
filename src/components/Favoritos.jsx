// src/components/FavoriteButton.jsx
import React, { useState, useEffect } from 'react';

const Favorito = ({ songId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // --- LÓGICA PARA localStorage IRÁ AQUÍ MÁS ADELANTE ---
  // Por ahora, solo simula el estado
  useEffect(() => {
    // Aquí podrías simular que algunas canciones son favoritas
    // para probar la visualización
    if (songId === 'goodbyes-post-malone' || songId === 'blinding-lights-the-weeknd') {
        setIsFavorite(true);
    }
  }, [songId]); // Vuelve a verificar si cambia la canción

  const handleClick = () => {
    // Por ahora, solo alternamos el estado visual
    setIsFavorite(!isFavorite);
    console.log(`Botón clicado para canción: ${songId}. Es favorito: ${!isFavorite}`);
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
        color: isFavorite ? 'red' : 'gray', // Estilo básico
        marginLeft: '10px' // Para separarlo un poco del texto
      }}
    >
      {isFavorite ? '❤️' : '♡'}
    </button>
  );
};

export default Favorito;