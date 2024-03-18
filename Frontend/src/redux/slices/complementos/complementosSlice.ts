import { createSlice } from '@reduxjs/toolkit';

export const complementosSlice = createSlice({
    name: 'complementos',
    initialState: {
        complementoList: [],
        complementoSelected: null,
        isLoading: false,
        isComplementoSelectedCharged: false,
        complementoChange: 0,
    },
    reducers: {
        startLoadingComplementosProcess: (state /* action */) => {
            state.isLoading = true;
        },
        startCompletosChangeProcess: (state /* action */) => {
            state.complementoChange = state.complementoChange + 1;
        },
        setComplementosData: (state, action) => {
            state.isLoading = false;
            state.complementoList = action.payload?.complementoList ?? [];
        },
        setComplementoSelectedData: (state, action) => {
            state.isLoading = false;
            state.complementoSelected = action.payload?.complementoSelected;
            state.isComplementoSelectedCharged = true;
        },
    },
});

export const {
    setComplementoSelectedData,
    setComplementosData,
    startLoadingComplementosProcess,
    startCompletosChangeProcess,
} = complementosSlice.actions;
