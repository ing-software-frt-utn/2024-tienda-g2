import { createSlice } from '@reduxjs/toolkit';

export const inventarioSlice = createSlice({
    name: 'inventario',
    initialState: {
        inventarioList: [],
        complementosList: [],
        // articuloSelected: {
        //     id: 0,
        //     descripcion: '',
        //     codigoBarras: '',
        //     costo: 0,
        //     margenGanancia: 0,
        //     precioFinal: 0,
        //     netoGravado: 0,
        //     porcentajeIVA: 0,
        //     categoriaId: 0,
        //     marcaId: 0,
        //     marcaNombre: '',
        //     categoriaDescripcion: '',
        // },
        // isArticuloSelectedCharged: false,
        isLoading: false,
        inventarioChange: 0,
    },
    reducers: {
        startLoadingInventarioProcess: (state /* action */) => {
            state.isLoading = true;
        },
        startInventarioChangeProcess: (state /* action */) => {
            state.inventarioChange = state.inventarioChange + 1;
        },
        setComplementosData: (state, action) => {
            state.isLoading = false;
            state.complementosList = action.payload?.complementosList ?? [];
        },
        setInventarioData: (state, action) => {
            state.isLoading = false;
            state.inventarioList = action.payload?.inventarioList ?? [];
        },
        // setArticulosSelectedData: (state, action) => {
        //     state.isLoading = false;
        //     state.articuloSelected = action.payload?.articuloSelected;
        //     state.isArticuloSelectedCharged = true;
        // },
    },
});

export const {
    startLoadingInventarioProcess,
    startInventarioChangeProcess,
    setInventarioData,
    setComplementosData,
} = inventarioSlice.actions;
