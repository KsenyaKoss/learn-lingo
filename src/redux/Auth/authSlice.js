import {createSlice} from '@reduxjs/toolkit'

// const pending = (state) => {
//   state.loading = true;
// };

// const rejected = (state) => {
//   state.loading = false;
//   state.isLoggedIn = false;
// };

const initialState = {
  user: { name: "", email: "", id: "" },
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.user.id = payload.id;
      state.token = payload.token;
    },
    removeUser(state) {
      state.user.name = "";
      state.user.email = "";
      state.user.id = "";
      state.token = null;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //     .addCase(register.pending, pending)
  //     .addCase(register.rejected, rejected)
  //     .addCase(login.pending, pending)
  //     .addCase(login.rejected, rejected)
  //     .addCase(logout.pending, pending)
  //     .addCase(logout.rejected, rejected)
  //     .addCase(register.fulfilled, (state, {payload}) => {
  //         state.user = {
  //             name: payload.name,
  //             email: payload.email,
  //             id: payload.id
  //         };
  //         state.token = payload.accessToken;
  //         state.isLoggedIn = true;
  //         state.loading = false;
  //     })
  //     .addCase(login.fulfilled, (state, {payload}) => {
  //         state.user = {
  //             name: payload.name,
  //             email: payload.email,
  //             id: payload.id
  //         };
  //         state.token = payload.accessToken;
  //         state.isLoggedIn = true;
  //         state.loading = false;
  //     })
  //     .addCase(logout.fulfilled, () => ({...initialState}))
  //   },
});

export const authReducer = authSlice.reducer;
export const { setUser, removeUser } = authSlice.actions;
