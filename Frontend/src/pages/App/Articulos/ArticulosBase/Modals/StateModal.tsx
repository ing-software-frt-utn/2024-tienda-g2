import React, { useEffect } from 'react';
import { GenericModal } from '../../../../../components/Modals/GenericModal';
import { ModalContext } from '../../../../../context/modal.context';
import { ActionButton } from '../../../../../components/Buttons/ActionButton';

interface Props {
    value: boolean;
    type: 'active' | 'inactive';
}

export const StateModal = ({ value, type }: Props) => {
    const { closeModal, openModal, state } = React.useContext(ModalContext);

    useEffect(() => {
        value && openModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <>
            {value && (
                <GenericModal closeFunction={closeModal} openValue={state}>
                    {type === 'active' ? (
                        <div className="flex flex-col justify-center">
                            <div>
                                <p className="text-center p-5">Quieres activar este articulo ?</p>
                            </div>
                            <div className="flex justify-center pt-5 text-xl">
                                <ActionButton
                                    title="No"
                                    type="submit"
                                    action={() => {}}
                                    customClass="bg-red-400 text-white mr-5"
                                />
                                <ActionButton
                                    title="Si"
                                    type="submit"
                                    action={() => {}}
                                    customClass="bg-teal-400 text-black hover:bg-teal-400 ml-5"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center">
                            <div>
                                <p className="text-center p-5 text-xl">
                                    Quieres deshabilitar este articulo ?
                                </p>
                            </div>
                            <div className="flex justify-center pt-5">
                                <ActionButton
                                    title="Si"
                                    type="submit"
                                    action={() => {}}
                                    customClass="bg-red-400 text-white mr-5"
                                />
                                <ActionButton
                                    title="No"
                                    type="submit"
                                    action={() => {}}
                                    customClass="bg-teal-400 text-black hover:bg-teal-400 ml-5"
                                />
                            </div>
                        </div>
                    )}
                </GenericModal>
            )}
        </>
    );
};
