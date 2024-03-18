import dashboard from '../assets/dashboard.svg';
import config from '../assets/config.svg';
// import telemarket from "../assets/telemarket.svg";
// import consulta from "../assets/consulta1.svg";

export interface SidebarRoutes {
    path?: string;
    icon: string;
    name: string;
    dropdown?: boolean;
    active?: boolean;
    open?: boolean;
    submenu?: Submenu[];
}

interface Submenu {
    path: string;
    name: string;
}

export const sidebarRoutes: SidebarRoutes[] = [
    // {
    //     path: '/app/',
    //     icon: dashboard,
    //     name: 'Dashboard',
    //     active: false,
    // },
    {
        path: '/app/ventas',
        icon: dashboard,
        name: 'Ventas',
        active: false,
    },
    {
        icon: dashboard,
        name: 'Gestion Articulos',
        dropdown: true,
        active: false,
        open: false,
        submenu: [
            {
                path: '/app/articulos-base',
                name: 'Articulos Base',
            },
            {
                path: '/app/articulos-stock',
                name: 'Articulos en Stock',
            },
        ],
    },
    {
        path: '/app/complementos',
        icon: dashboard,
        name: 'Gestion Complementos',
        active: false,
    },
    // {
    //     icon: dashboard,
    //     name: 'Gestion Complementos',
    //     dropdown: true,
    //     active: false,
    //     open: false,
    //     submenu: [
    //         {
    //             path: '/app/colores',
    //             name: 'Colores'
    //         },
    //         {
    //             path: '/app/talles',
    //             name: 'Talles'
    //         },
    //         {
    //             path: '/app/marca',
    //             name: 'Marca'
    //         },
    //         {
    //             path: '/app/categoria',
    //             name: 'Categoria'
    //         }
    //     ]
    // },
    {
        icon: config,
        name: 'Configuracion',
        dropdown: true,
        active: false,
        open: false,
        submenu: [
            {
                path: '/app/users',
                name: 'Usuarios',
            },
            {
                path: '/app/permisos',
                name: 'Permisos',
            },
            {
                path: '/app/help',
                name: 'Ayuda',
            },
        ],
    },
];
