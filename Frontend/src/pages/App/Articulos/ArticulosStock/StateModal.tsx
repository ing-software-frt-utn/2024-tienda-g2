import React, { useEffect, useState } from 'react';
import { GenericModal } from '../../../../components/Modals/GenericModal';
import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { ModalContext } from '../../../../context/modal.context';
import { TextInputDisabled } from '../../../../components/Inputs/TextInput';
import { ReactSelect } from '../../../../components/Inputs/ReactSelect';

interface Props {
    value: boolean;
}

export const StateModal = ({ value }: Props) => {
    const { closeModal, openModal, state } = React.useContext(ModalContext);

    useEffect(() => {
        value && openModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const [optionValueTipoTalle, setOptionValueTipoTalle] = useState({
        label: 'Universal',
        value: '1',
    });

    const [optionValueTalle, setOptionValueTalle] = useState({
        label: 'XL',
        value: '1',
    });

    const [optionValueColor, setOptionValueColor] = useState({
        label: 'Verde',
        value: '1',
    });

    return (
        <>
            {value && (
                <GenericModal closeFunction={closeModal} openValue={state}>
                    <div>
                        <div className="flex justify-center">
                            <div className="flex m-5 p-4 w-4/6">
                                <div className="rounded-lg bg-slate-400 w-1/2 mr-5 p-5">
                                    <TextInputDisabled
                                        inputName={'name'}
                                        customInputClassName={'mt-0 h-10 text-white '}
                                        disabled
                                        value={'0010-1150'}
                                    />
                                    <TextInputDisabled
                                        inputName={'name'}
                                        customContainerClassName="mt-5"
                                        customInputClassName={'mt-0 h-10 text-white'}
                                        disabled
                                        value={'Remera Manga Larga'}
                                    />
                                    <TextInputDisabled
                                        inputName={'name'}
                                        customContainerClassName="mt-5"
                                        customInputClassName={'mt-0 h-10 text-white'}
                                        disabled
                                        value={'La Coste'}
                                    />
                                    <TextInputDisabled
                                        inputName={'name'}
                                        customContainerClassName="mt-5"
                                        customInputClassName={'mt-0 h-10 text-white'}
                                        disabled
                                        value={'Descripcion'}
                                    />
                                </div>
                                <form className="w-1/2 ml-5">
                                    <div className="mb-10">
                                        <ReactSelect
                                            inputTitle="Tipo Talle"
                                            onChange={newValue => {
                                                if (newValue) {
                                                    setOptionValueTipoTalle({
                                                        label: newValue.label,
                                                        value: newValue.value.toString(),
                                                    });
                                                } else {
                                                    setOptionValueTipoTalle({
                                                        label: '',
                                                        value: '',
                                                    });
                                                }
                                            }}
                                            value={optionValueTipoTalle}
                                            options={[
                                                { value: '1', label: 'Universal' },
                                                { value: '2', label: 'Americano' },
                                                { value: '3', label: 'Europeo' },
                                                { value: '4', label: 'Otro' },
                                            ]}
                                            isSearchable
                                        />
                                        <ReactSelect
                                            inputTitle="Numero de Talle"
                                            customInputContainer="mt-5"
                                            onChange={newValue => {
                                                if (newValue) {
                                                    setOptionValueTalle({
                                                        label: newValue.label,
                                                        value: newValue.value.toString(),
                                                    });
                                                } else {
                                                    setOptionValueTalle({ label: '', value: '' });
                                                }
                                            }}
                                            value={optionValueTalle}
                                            options={[
                                                { value: '1', label: 'XL' },
                                                { value: '2', label: 'L' },
                                                { value: '3', label: 'M' },
                                                { value: '4', label: 'S' },
                                            ]}
                                            isSearchable
                                        />
                                        <ReactSelect
                                            inputTitle="Color"
                                            customInputContainer="mt-5"
                                            onChange={newValue => {
                                                if (newValue) {
                                                    setOptionValueColor({
                                                        label: newValue.label,
                                                        value: newValue.value.toString(),
                                                    });
                                                } else {
                                                    setOptionValueColor({ label: '', value: '' });
                                                }
                                            }}
                                            value={optionValueColor}
                                            options={[
                                                { value: '1', label: 'Rojo' },
                                                { value: '2', label: 'Negro' },
                                                { value: '3', label: 'Azul' },
                                                { value: '4', label: 'Amarillo' },
                                                { value: '5', label: 'Naranja' },
                                                { value: '6', label: 'Morado' },
                                            ]}
                                            isSearchable
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <ActionButton
                                            title="Agregar"
                                            customClass="bg-cyan-500 hover:bg-black py-2 px-4 text-white rounded-md ml-2"
                                            action={() => {}}
                                            type="submit"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </GenericModal>
            )}
        </>
    );
};
