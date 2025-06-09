const FavoritesToggleButton = ({ handleClick, showingFavorites}) => {


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