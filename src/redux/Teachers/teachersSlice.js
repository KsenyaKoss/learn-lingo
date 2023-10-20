import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  teachers: [],
  favorites: [],
  totalHits: null,
  isLoading: false,
  filter: {
    languages: "",
    levels: "",
    price: "",
  },
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    addTeachers: (state, { payload }) => {
      state.teachers = payload;
      state.currentPage += 1;
    },
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addTeachers, addToFavorites, setFilter} = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
