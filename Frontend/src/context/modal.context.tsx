import React, { createContext, useState, ReactNode } from 'react';

interface ModalProviderProps {
    children: ReactNode;
}

interface InitialState {
    state: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const ModalContext = createContext({} as InitialState);

const ModalProvider = ({ children }: ModalProviderProps) => {
    const [state, setState] = useState(false);

    const openModal = () => setState(true);
    const closeModal = () => setState(false);

    const memoedValue = React.useMemo(() => {
        const value = {
            state,
            openModal,
            closeModal,
        };
        return value;
    }, [state]);

    return <ModalContext.Provider value={memoedValue}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
