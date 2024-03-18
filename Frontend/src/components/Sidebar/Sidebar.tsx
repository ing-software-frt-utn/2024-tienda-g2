import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LinksWithDropDown, LinksWithoutDropDown } from './LinksComponent';
// import { sidebarRoutes } from '../../routes/SidebarRoutes';
import { sidebarRoutes } from '../../routes/SidebarRoutes';
import { getRoutesOrderForMenu, getRoutesUpdatedForScreenRefresh } from './sidebarMethods';

import close2 from './assets/close2.svg';
import logoClose from './assets/logo-close.jpg';
import logo1 from './assets/logo1.png';
import profile from '../../assets/profile.svg';

import './sidebarStyles.css';

interface Props {
    valueOpen: boolean;
    handleOpen: (id: number) => void;
}

export const Sidebar = ({ valueOpen, handleOpen }: Props) => {
    const location = useLocation();
    const [routesValue, setRoutesValue] = useState(sidebarRoutes);

    useEffect(() => {
        const routes = getRoutesUpdatedForScreenRefresh(routesValue, location.pathname);
        setRoutesValue(routes);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    const handleClickMenu = (id: number) => {
        const updateValue = getRoutesOrderForMenu(id, routesValue);
        setRoutesValue(updateValue);
    };

    return (
        <div className={valueOpen ? 'sidebar' : 'sidebar close'}>
            <div className="logo-details">
                {/* <h1 className='text-white text-3xl ml-10 mt-10'>Nader&Asociados</h1> */}

                <div className="logo_img">
                    {valueOpen ? (
                        <>
                            <img src={logo1} alt="" className="logo_img_open" />
                            <img
                                src={close2}
                                alt=""
                                className="closeSidebarButton"
                                onClick={() => {
                                    handleOpen(1);
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <img src={logoClose} alt="" className="logo_img_close" />
                            <img
                                src={close2}
                                alt=""
                                className="closeSidebarButton"
                                onClick={() => {
                                    handleOpen(1);
                                }}
                            />
                        </>
                    )}
                </div>
            </div>
            <ul
                className="nav-links"
                onClick={() => {
                    handleOpen(2);
                }}>
                {routesValue.map((route, index) =>
                    !route.dropdown ? (
                        <LinksWithoutDropDown route={route} key={route.name} />
                    ) : (
                        <LinksWithDropDown
                            route={route}
                            indexMenu={index}
                            onHandleMenu={handleClickMenu}
                            key={route.name}
                        />
                    ),
                )}
            </ul>

            <div
                className="profile-details"
                onClick={() => {
                    handleOpen(2);
                }}>
                <div className="profile-content">
                    {/* <img src={require("../Sidebar/img/profile.jpg")} alt="" /> */}
                    <img src={profile} alt="" />
                </div>
                <div className="name-job">
                    <div className="profile_name">FacuSichi</div>
                    <div className="job">Administrador</div>
                </div>
                <i className="btn btn-outline-light bx bx-log-out"></i>
            </div>
        </div>
    );
};
