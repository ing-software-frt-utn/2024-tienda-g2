import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* SLICES */
import { authSlice } from '../slices/auth';
import { complementosSlice } from '../slices/complementos';
import { articulosSlice } from '../slices/articulos';
import { inventarioSlice } from '../slices/inventario';
import { ventaSlice } from '../slices/venta';

const persistConfig = {
    key: 'auth',
    storage,
};

const authPersistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
    reducer: {
        auth: authPersistedReducer,
        complementos: complementosSlice.reducer,
        articulos: articulosSlice.reducer,
        inventario: inventarioSlice.reducer,
        venta: ventaSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
