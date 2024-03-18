interface SeparatorProps {
    color: string;
}

export const SeparatorWithoutText = ({ color }: SeparatorProps) => {
    return (
        <div className="relative flex mt-4 items-center">
            <div className={`flex-grow border-t ${color}`}></div>
        </div>
    );
};

export const SeparatorWithoutTextForDashboard = ({ color }: SeparatorProps) => {
    return (
        <div className="relative flex mx-2 items-center">
            <div className={`flex-grow border-t ${color}`}></div>
        </div>
    );
};

export const SeparatorWithText = ({ text }: { text: string }) => {
    return (
        <div className="relative flex mt-2 items-center">
            <div className="flex-grow border-t border-orange-400 dark:border-indigo-400"></div>
            <span className="flex-shrink mx-4 text-teal-400 dark:text-indigo-400">{text}</span>
            <div className="flex-grow border-t border-orange-400 dark:border-indigo-400"></div>
        </div>
    );
};
