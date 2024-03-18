import { Link } from 'react-router-dom'
import { getClassNameForMenu } from './sidebarMethods';

export interface RoutesProps {
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

interface LinksWithoutDropDownProps {
    route: RoutesProps;
}

interface LinksWithDropDownProps {
    route: RoutesProps;
    indexMenu: number;
    onHandleMenu: (id: number) => void;
}

interface SimpleLinkProps {
    route: Submenu;
}

interface Submenu {
    path: string;
    name: string;
}


export const LinksWithoutDropDown = ({ route }: LinksWithoutDropDownProps) => {

    const classNameForMenu = getClassNameForMenu(route);

    return (
        <li key={route.name} className={classNameForMenu}>
            <Link to={`${route.path}`}>
                <img src={route.icon} className='h-10'></img>
                <span className="link_name">{route.name}</span>
                {/* <i className='bx bxs-chevron-down arrow customArrow' style={{ color: (route.active ? '#1F1E2C' : '#060515') }}></i> */}
            </Link>
        </li>
    )
}

export const LinksWithDropDown = ({ route, indexMenu, onHandleMenu }: LinksWithDropDownProps) => {

    const classNameForMenu = getClassNameForMenu(route);

    return (
        <li className={classNameForMenu}>
            <div className="iocn-link" onClick={() => { onHandleMenu(indexMenu) }}>
                <a href="#">
                    <img src={route.icon} className='w-10'></img>
                    <span className="link_name">{route.name}</span>
                </a>
                <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className={route.active ? 'sub-menu-active' : 'sub-menu'}>
                {route.submenu!.map((subroute) => (
                    <SimpleLinkOnDropDown route={subroute} key={subroute.name} />
                ))}
            </ul>
        </li>
    )
}

const SimpleLinkOnDropDown = ({ route }: SimpleLinkProps) => {
    return (
        <li key={route.path}>
            <Link to={`${route.path}`}>{route.name}</Link>
        </li>
    )
}