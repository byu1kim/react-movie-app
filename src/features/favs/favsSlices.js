import { createSlice } from "@reduxjs/toolkit";

function getFavs() {
  console.log("Getting Favs");
  let favsFromStorage = localStorage.getItem("character-app-favs");
  if (favsFromStorage === null) {
    favsFromStorage = [];
  } else {
    favsFromStorage = JSON.parse(favsFromStorage);
  }
  return favsFromStorage;
}

const initialState = {
  items: getFavs(),
};

function getIndex(item, arr) {
  return arr.findIndex((arrItem) => arrItem.id === item.id);
}

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFav: (state, action) => {
      const newFavs = [...state.items, action.payload];
      localStorage.setItem("character-app-favs", JSON.stringify(newFavs));
      state.items = newFavs;
    },
    deleteFav: (state, action) => {
      const itemsCopy = state.items;
      itemsCopy.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem("character-app-favs", JSON.stringify(itemsCopy));
      state.items = itemsCopy;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFav, deleteFav } = favsSlice.actions;

export default favsSlice.reducer;
