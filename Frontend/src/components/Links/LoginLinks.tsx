import { Link } from 'react-router-dom';

interface Props {
    url: string;
    title: string;
    className?: string;
    idType: number;
}

export const LoginLinks = ({ url, title, className = '', idType }: Props) => {
    return (
        <div className={className}>
            <Link
                to={url}
                className="text-lg text-cyan-500 hover:text-orange-500 hover:cursor-pointer">
                <h2 className={idType === 0 ? 'text-center mt-4' : 'text-center'}>{title}</h2>
            </Link>
        </div>
    );
};
