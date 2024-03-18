/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
    registerForm: any;
    inputName: string;
    inputTitle?: string;
    placeholder?: boolean;
    placeholderText?: string;
    customInputClassName?: string;
    customContainerClassName?: string;
    options: {
        value: string | number;
        label: string;
    }[];
}

export const SelectInput = ({
    registerForm,
    inputName,
    inputTitle,
    placeholder,
    placeholderText,
    options,
    customInputClassName,
    customContainerClassName,
}: Props) => {
    return (
        <div className={`${customContainerClassName}`}>
            {inputTitle && <p className="text-lg">{inputTitle}</p>}
            <select
                {...registerForm}
                name={inputName}
                className={`text-md mt-2 px-2 py-1 rounded-md w-full text-black text-center
                bg-gray-100 border-2 border-gray-300 placeholder-gray-500 shadow-lg shadow-gray-800
                focus:border-orange-600 focus:outline-none
                 ${customInputClassName}`}>
                {placeholder && <option value="">{placeholderText}</option>}
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
