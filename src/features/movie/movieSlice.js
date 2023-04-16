import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reccomend: null,
    newDisney: null,
    original: null,
    trending: null,

};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.reccomend = action.payload.reccomend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
            
        },
    },
});

export const { setMovies } = movieSlice.actions;

export const selectReccomend = state => state.movie.reccomend
export const selectNewDisney = state => state.movie.newDisney
export const selectOriginal = state => state.movie.original
export const selectTrending = state => state.movie.trending

export default movieSlice.reducer;