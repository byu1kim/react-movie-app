import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, deleteFav } from "../features/favs/favsSlices";

const FavBtn = ({ movieObj }) => {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs.items);

  // Check whether the object is favourited or not
  const isFav = (object, id) => {
    if (object) {
      return object.some((obj) => obj.id === id);
    }
    return false;
  };

  // Update the local stroage
  function handleFavClick(checkFav, obj) {
    if (checkFav === false) {
      dispatch(addFav(obj));
    } else {
      dispatch(deleteFav(obj));
    }
  }

  // Handle fav buttons click
  function handleAddFav() {
    handleFavClick(false, movieObj);
  }

  function handleRemoveFav() {
    handleFavClick(true, movieObj);
  }

  return (
    <>
      {isFav(favs, movieObj.id) === false ? (
        <button className="fav-btn" onClick={handleAddFav}>
          Add To Favourites
        </button>
      ) : (
        <button className="fav-btn" onClick={handleRemoveFav}>
          Remove From Favourites
        </button>
      )}
    </>
  );
};

export default FavBtn;
