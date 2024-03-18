import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticated: false,
        sessionData: null,
        isLoading: false,
    },
    reducers: {
        startLoadingAuthProcess: (state /* action */) => {
            state.isLoading = true;
        },
        setAuthData: (state, action) => {
            state.isLoading = false;
            state.authenticated = action.payload?.authenticated ?? true;
            state.sessionData = action.payload?.sessionData;
        },
        logout: state => {
            state.isLoading = false;
            state.authenticated = false;
            state.sessionData = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoadingAuthProcess, setAuthData, logout } = authSlice.actions;
