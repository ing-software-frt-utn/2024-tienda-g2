import { createSlice } from '@reduxjs/toolkit';

export const articulosSlice = createSlice({
    name: 'articulos',
    initialState: {
        articulosList: [],
        articuloSelected: {
            id: 0,
            descripcion: '',
            codigoBarras: '',
            costo: 0,
            margenGanancia: 0,
            precioFinal: 0,
            netoGravado: 0,
            porcentajeIVA: 0,
            categoriaId: 0,
            marcaId: 0,
            marcaNombre: '',
            categoriaDescripcion: '',
        },
        isLoading: false,
        isArticuloSelectedCharged: false,
        articuloChange: 0,
    },
    reducers: {
        startLoadingArticulosProcess: (state /* action */) => {
            state.isLoading = true;
        },
        startArticulosChangeProcess: (state /* action */) => {
            state.articuloChange = state.articuloChange + 1;
        },
        setArticulosData: (state, action) => {
            state.isLoading = false;
            state.articulosList = action.payload?.articulosList ?? [];
        },
        setArticulosSelectedData: (state, action) => {
            state.isLoading = false;
            state.articuloSelected = action.payload?.articuloSelected;
            state.isArticuloSelectedCharged = true;
        },
    },
});

export const {
    startLoadingArticulosProcess,
    startArticulosChangeProcess,
    setArticulosData,
    setArticulosSelectedData,
} = articulosSlice.actions;
