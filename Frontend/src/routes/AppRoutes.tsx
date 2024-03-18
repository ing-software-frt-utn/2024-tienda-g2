import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoutesList } from './AppRoutesList';
import { Error404 } from '../pages/Error404';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';

export const AppRoutes = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleOpenSidebar = (id: number) => {
        id === 1 ? setIsSidebarOpen(!isSidebarOpen) : setIsSidebarOpen(true);
    };

    return (
        <section className="">
            <Header />
            <Sidebar valueOpen={isSidebarOpen} handleOpen={handleOpenSidebar} />

            <section className="home-section sm:p-4 min-h-screen">
                <div className="page-content">
                    <Routes>
                        {AppRoutesList.map((route, i) => (
                            <Route path={route.path} element={route.component} key={i} />
                        ))}

                        {/* <Route path={'/'} element={<Navigate to="/app/dashboard" replace />} /> */}
                        <Route path={'/'} element={<Navigate to="/app/ventas" replace />} />
                        <Route path={'/404'} element={<Error404 />} />
                        <Route path="*" element={<Navigate to="/app/404" replace />} />
                    </Routes>
                </div>
            </section>
        </section>
    );
};
