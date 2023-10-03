import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musics: [],
  isLoading: false,
  isError: "",
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    getMusicsFetch: (state) => {
      state.isLoading = true;
    },
    getMusicSucces: (state, action) => {
      state.musics = action.payload;
      state.isLoading = false;
    },
    getMusicError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { getMusicsFetch, getMusicSucces, getMusicError } =
  musicSlice.actions;

export default musicSlice.reducer;
