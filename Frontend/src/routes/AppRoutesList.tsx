import { ProtectedRoute } from './ProtectedRoute';
import { Dashboard } from '../pages/App/Dashboard';
import { AppRoutesInterface } from '../interfaces/Routes';
import { VentasList } from '../pages/App/Ventas/VentasList';
import { NuevaVenta } from '../pages/App/Ventas/Add/NuevaVenta';
import { ComplementosScreen } from '../pages/App/Complementos/ComplementosScreen';
import { ArticulosBaseScreen } from '../pages/App/Articulos/ArticulosBase/ArticulosBaseScreen';
import { ArticulosStockScreen } from '../pages/App/Articulos/ArticulosStock/ArticulosStockScreen';

export const AppRoutesList: AppRoutesInterface[] = [
    {
        path: '/dashboard',
        component: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: '/complementos',
        component: (
            <ProtectedRoute>
                <ComplementosScreen />
            </ProtectedRoute>
        ),
    },
    {
        path: '/ventas',
        component: (
            <ProtectedRoute>
                <VentasList />
            </ProtectedRoute>
        ),
    },
    {
        path: '/ventas/nueva-venta',
        component: (
            <ProtectedRoute>
                <NuevaVenta />
            </ProtectedRoute>
        ),
    },
    {
        path: '/articulos-base',
        component: (
            <ProtectedRoute>
                <ArticulosBaseScreen />
            </ProtectedRoute>
        ),
    },
    {
        path: '/articulos-stock',
        component: (
            <ProtectedRoute>
                <ArticulosStockScreen />
            </ProtectedRoute>
        ),
    },
    // {
    //     path: '/ventas/:id',
    //     component: (
    //         <ProtectedRoute>
    //             <ClienteScreen />
    //         </ProtectedRoute>
    //     ),
    // },
];
