import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { teachersReducer } from './Teachers/teachersSlice';


export const store = configureStore({
    reducer: {
        user: authReducer,
        teachers: teachersReducer,
    }
})