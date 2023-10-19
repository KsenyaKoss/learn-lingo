import { createSlice } from "@reduxjs/toolkit";

// const filterTeachers = (teachers, filter) => {
//   const { languages, levels, price } = filter;
  
// };

const initialState = {
  teachers: [],
  favorites: [],
  totalHits: null,
  isLoading: false,
  currentPage: 1,
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
      state.favorites.concat(payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addTeachers, addToFavorites, setFilter } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
