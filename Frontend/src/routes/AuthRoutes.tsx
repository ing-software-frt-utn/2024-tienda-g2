import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutesList } from './AuthRoutesList';
import { Error404 } from '../pages/Error404';

export const AuthRoutes = () => {
    return (
        <Routes>
            {AuthRoutesList.map((route, i) => (
                <Route path={route.path} element={route.component} key={i} />
            ))}

            {/* RUTAS PERSONALIZADAS */}

            <Route path={'/'} element={<Navigate to="/auth/login" replace />} />
            <Route path={'/404'} element={<Error404 />} />
            <Route path="*" element={<Navigate to="/auth/404" replace />} />
        </Routes>
    );
};
