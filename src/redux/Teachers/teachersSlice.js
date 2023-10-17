import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    teachers: [],
    favorites: [],
    totalHits: null,
    isLoading: false,
    currentPage: 1,
}


const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
       addTeachers: (state,  {payload})=> {
          state.teachers = state.teachers.concat(payload);
          state.currentPage +=1;
       },
       addToFavorites: (state, {payload}) => {
          state.favorites.concat(payload);

       }
    }
})


export const { addTeachers } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;