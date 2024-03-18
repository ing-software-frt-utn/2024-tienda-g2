import { Link } from 'react-router-dom';

interface NavbarOptionLinkProps {
    item: {
        name: string;
        description: string;
        href: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        icon: any;
    };
    close: () => void;
}

interface NavbarSimpleLinkProps {
    link: string;
    title: string;
}

export const NavbarOptionLink = ({ item, close }: NavbarOptionLinkProps) => {
    return (
        <Link
            key={item.name}
            onClick={() => close()}
            to={item.href}
            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800">
            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-400" aria-hidden="true" />
            <div className="ml-4">
                <p className="text-base font-medium text-gray-100">{item.name}</p>
                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
            </div>
        </Link>
    );
};

export const NavbarOptionSecondaryLink = ({ item, close }: NavbarOptionLinkProps) => {
    return (
        <div key={item.name} className="flow-root">
            <Link
                to={item.href}
                onClick={() => close()}
                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-100 hover:bg-cyan-700">
                <item.icon className="flex-shrink-0 h-6 w-6 text-teal-300" aria-hidden="true" />
                <span className="ml-3">{item.name}</span>
            </Link>
        </div>
    );
};

export const NavbarSimpleLink = ({ link, title }: NavbarSimpleLinkProps) => {
    return (
        <Link
            to={link}
            className="mt-1 text-lg font-medium text-gray-100 hover:text-cyan-300 dark:text-gray-100 dark:hover:text-blue-400">
            {title}
        </Link>
    );
};
