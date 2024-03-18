interface Props {
    title: string;
    action?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
    customClass?: string;
}

export const ActionButton = ({ title, action, customClass, type = 'button' }: Props) => {
    return (
        <button
            onClick={action && action}
            type={type}
            className={`w-40 py-2 px-4 rounded-md ${customClass}`}>
            {title}
        </button>
    );
};

export const TableButton = ({ title, action, customClass, type = 'button' }: Props) => {
    return (
        <button
            onClick={action && action}
            type={type}
            className={`py-2 px-4 rounded-md ${customClass}`}>
            {title}
        </button>
    );
};
