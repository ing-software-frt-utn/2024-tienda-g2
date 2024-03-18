import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from './routes/AuthRoutes';
import { AppRoutes } from './routes/AppRoutes';
import { Error404 } from './pages/Error404';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to="/auth/login" replace />} />

            <Route path={'/auth/*'} element={<AuthRoutes />} />
            <Route path={'/app/*'} element={<AppRoutes />} />

            <Route path={'/404'} element={<Error404 />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
}

export default App;
