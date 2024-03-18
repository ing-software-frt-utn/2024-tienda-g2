import React from 'react';
import './styles.css';

interface Props {
    registerForm?: any;
    inputName: string;
    inputTitle?: string;
    inputType: string;
    keyPressEvent?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    customInputClassName?: string;
    customContainerClassName?: string;
    disabled?: boolean;
}

export const TextInput = ({
    registerForm,
    inputName,
    inputTitle,
    inputType,
    keyPressEvent,
    placeholder,
    customInputClassName,
    customContainerClassName,
    disabled,
}: Props) => {
    return (
        <div className={`${customContainerClassName}`}>
            {inputTitle && <p className="text-lg">{inputTitle}</p>}
            <input
                disabled={disabled ?? false}
                type={inputType}
                name={inputName}
                placeholder={disabled ? '' : placeholder}
                onKeyPress={keyPressEvent}
                className={`text-md mt-2 px-2 py-1 rounded-md w-full text-black text-center
                 border-2 border-gray-300 placeholder-gray-500 shadow-lg shadow-gray-800
                focus:border-orange-600 focus:outline-none formInput ${disabled ? 'bg-gray-500' : 'bg-gray-100'}
                 ${customInputClassName}`}
                {...registerForm}
            />
        </div>
    );
};

interface DisabledProps {
    inputName: string;
    inputTitle?: string;
    keyPressEvent?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    customInputClassName?: string;
    customContainerClassName?: string;
    disabled?: boolean;
    value?: string | any;
}

export const TextInputDisabled = ({
    inputName,
    inputTitle,
    customInputClassName,
    customContainerClassName,
    disabled,
    value,
}: DisabledProps) => {
    return (
        <div className={`${customContainerClassName}`}>
            {inputTitle && <p className="text-lg">{inputTitle}</p>}
            <input
                disabled={disabled ?? true}
                type={'text'}
                name={inputName}
                value={value}
                onChange={() => {}}
                className={`text-md mt-2 px-2 py-1 rounded-md w-full text-black text-center
                 border-2 border-gray-300 placeholder-gray-500 shadow-lg shadow-gray-800
                focus:border-orange-600 focus:outline-none formInput ${disabled ? 'bg-gray-500' : 'bg-gray-100'}
                 ${customInputClassName}`}
            />
        </div>
    );
};
