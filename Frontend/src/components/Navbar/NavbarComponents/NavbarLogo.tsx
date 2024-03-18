import { Link } from "react-router-dom"
import logo from '../../../assets/logo.jpg'

interface Props {
    link: string;
}

export const NavbarLogo = ({ link }: Props) => {

    const altLogo = "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg";

    return (
        <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to={link}>
                <span className="sr-only">Signando</span>
                <img
                    className="h-10 w-auto sm:h-12 rounded-xl"
                    src={logo ?? altLogo} alt=""
                />
            </Link>
        </div>
    )
}
