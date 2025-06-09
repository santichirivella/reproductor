
import Tarjeta from './Tarjeta';

import { useState, useEffect } from "react";
import { $favoritesSongs } from "../store";
import FavoritesToggleButton from './FavoritesToggleButton';

const SongList = ({ allSongs }) => {
  const [showingFavorites, setShowingFavorites] = useState(false);
  const [FavoritesSongs, setFavoritesSongs] = useState([])
  // const [favoriteSongIds, setFavoriteSongIds] = useState([]);

  useEffect(() => {
    $favoritesSongs.subscribe(favoritesSongs =>
      setFavoritesSongs(favoritesSongs)
    )

  }, []); 

  const ToggleFavorites = () => {
    setShowingFavorites(state => !state)
  }


  
  return (
    <>
      <FavoritesToggleButton handleClick={ToggleFavorites} showingFavorites={showingFavorites} />
      {
        showingFavorites 
        ? FavoritesSongs.map(song => (
            FavoritesSongs.length == 0 
            ? <p>Aún no tienes canciones favoritas. ¡Haz clic en el ❤️ para añadir algunas!</p>
            : <Tarjeta
              key={song._id}
              song={song}
            />
            ))
        : allSongs.map(song => (
          <Tarjeta
            key={song._id}
            song={song}
          />
        ))
      }
    </>
  );
};

export default SongList;
