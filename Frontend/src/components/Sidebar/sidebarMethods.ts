import { SidebarRoutes } from "../../routes/SidebarRoutes";
import { RoutesProps } from "./LinksComponent";

export const getRoutesOrderForMenu = (id: number, routes: SidebarRoutes[]) => {

    const updateValue = routes.map((resValue: SidebarRoutes, idx: number) => idx === id
        ? { ...resValue, open: !resValue.open }
        : { ...resValue, open: false }
    );

    return updateValue;
}

export const getRoutesForActiveMenu = (id: number, routes: SidebarRoutes[]) => {

    const updateValue = routes.map((resValue, idx) => idx === id
        ? { ...resValue, open: true, active: true }
        : { ...resValue, open: false, active: false }
    );

    return updateValue;
}

export const getClassNameForMenu = (route: RoutesProps) => {

    let classNameForMenu = '';

    (route.open && route.active) && (classNameForMenu = 'showMenu activeOption');
    (route.open && !route.active) && (classNameForMenu = 'showMenu optionOpen');
    (!route.open && route.active) && (classNameForMenu = 'activeOption');

    return classNameForMenu;
}

export const getRoutesUpdatedForScreenRefresh = (routes: SidebarRoutes[], location: string) => {

    let updatedRoutes = [];
    let checkSpecialRoute = false;

    if (location !== '/') {
        const specialRoutes = ['/profile', '/profile/', '/user', '/user/'];
        (specialRoutes.find((route) => location.includes(route))) && (checkSpecialRoute = true);
        // checkSpecialRoute = specialRoutes.find((route) => location.includes(route));
    }

    (!checkSpecialRoute)
        ? updatedRoutes = getCommonRoute(routes, location)
        : updatedRoutes = getSpecialRoute(routes, location);

    return updatedRoutes;
}

const getCommonRoute = (routes: SidebarRoutes[], location: string) => {

    let currentMenuIndex = 0;

    routes.forEach((route, index) => {
        if (!route?.dropdown) {
            (route.path === location) && (currentMenuIndex = index);
        } else {
            route.submenu!.forEach(subroute => {
                (subroute.path === location) && (currentMenuIndex = index);
            });
        }
    });

    return getRoutesForActiveMenu(currentMenuIndex, routes);
}

const getSpecialRoute = (routes: SidebarRoutes[], location: string) => {

    const consoleUMRoutes = ['/profile', '/profile/', '/user', '/user/'];
    const agencyAdminRoutes = ['/user-history'];

    let currentMenuIndex = 0;

    if (consoleUMRoutes.find((route) => location.includes(route))) {
        currentMenuIndex = getRouteIndexByMenuName(routes, "Admin Usuarios Consola");
    }

    if (agencyAdminRoutes.find((route) => location.includes(route))) {
        currentMenuIndex = getRouteIndexByMenuName(routes, "Admin de Organismo");
    }

    return getRoutesForActiveMenu(currentMenuIndex, routes);
}

const getRouteIndexByMenuName = (routes: SidebarRoutes[], nameMenu: string) => {

    let indexMenu = 0;

    routes.forEach((route, index) => {
        if (route.name === nameMenu) { indexMenu = index }
    });

    return indexMenu;
}