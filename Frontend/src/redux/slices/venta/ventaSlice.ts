import { createSlice } from '@reduxjs/toolkit';

export const ventaSlice = createSlice({
    name: 'venta',
    initialState: {
        ventaList: [],
        ventaSelected: {},
        ventaFinalizada: {},
        // infoVentaCopy: {},
        isLoading: false,
        // ventaChange: 0,
        cliente: {},
    },
    reducers: {
        startLoadingVentaProcess: (state /* action */) => {
            state.isLoading = true;
        },
        // startVentaChangeProcess: (state /* action */) => {
        //     state.ventaChange = state.ventaChange + 1;
        // },
        setVentasData: (state, action) => {
            state.isLoading = false;
            state.ventaList = action.payload?.ventaList ?? [];
        },
        setVentaFinalizadaData: (state, action) => {
            state.isLoading = false;
            state.ventaFinalizada = action.payload?.ventaFinalizada ?? {};
        },
        setVentaSelectedData: (state, action) => {
            state.isLoading = false;
            state.ventaSelected = action.payload?.ventaSelected;
        },
        setClienteData: (state, action) => {
            state.isLoading = false;
            state.cliente = action.payload?.cliente;
        },
    },
});

export const {
    startLoadingVentaProcess,
    // startVentaChangeProcess,
    setVentasData,
    setVentaSelectedData,
    setClienteData,
    setVentaFinalizadaData,
} = ventaSlice.actions;
