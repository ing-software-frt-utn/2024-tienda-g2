import { Link } from 'react-router-dom';

interface Props {
    title: string;
    link: string;
    customClass?: string;
}

export const LinkButton = ({ title, customClass, link }: Props) => {
    return (
        <button className={`w-40 py-2 px-4 rounded-md ${customClass}`}>
            <Link to={link}>{title}</Link>
        </button>
    );
};
