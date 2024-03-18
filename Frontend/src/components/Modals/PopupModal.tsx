import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-responsive-modal';
import { ActionButton } from '../Buttons/ActionButton';

import 'react-responsive-modal/styles.css';
import './popupstyles.css';
import { TextInput } from '../Inputs/TextInput';
import { SelectInput } from '../Inputs/SelectInput';
import {
    EstadoCivilOptions,
    ceseOptions,
    contratoOptions,
    empresaOptions,
} from '../../data/select/selectOptions';

interface Props {
    openValue: boolean;
    closeFunction: () => void;
}

type FormFilterValues = {
    nombre: string;
    apellido: string;
    empresa: string;
    contrato: string;
    cese: string;
    estado: string;
    direccion: string;
    telefono: string;
    telefonoAlternativo: string;
    correo: string;
    cuit: string;
    nacimiento: string;
    civil: string;
    provincia: string;
    localidad: string;
};

const closeIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12 text-red-500">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

export const PopupModal = ({ openValue, closeFunction }: Props) => {
    const [activeView, setActiveView] = useState(1);

    const changeActiveView = (view: number) => {
        switch (view) {
            case 1:
                setActiveView(1);
                break;
            case 2:
                setActiveView(2);
                break;
            case 3:
                setActiveView(3);
                break;
            default:
                setActiveView(1);
                break;
        }
    };

    const { register, handleSubmit } = useForm<FormFilterValues>();

    const onSubmit = handleSubmit(data => {
        console.log(data);
    });

    return (
        <Modal
            open={openValue}
            onClose={closeFunction}
            closeIcon={closeIcon}
            classNames={{
                overlay: 'customOverlay',
                overlayAnimationIn: 'customEnterOverlayAnimation',
                overlayAnimationOut: 'customLeaveOverlayAnimation',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
                modal: 'customModal',
            }}
            animationDuration={500}>
            <h1 className="text-2xl font-bold text-gray-100 mb-5">Nuevo Cliente</h1>
            <div className="border-t border-gray-200"></div>

            <div className="mt-5 flex justify-center">
                <div className="mr-5 w-full">
                    <ActionButton
                        title="Datos Personales"
                        action={() => {
                            changeActiveView(1);
                        }}
                        customClass={`${
                            activeView === 1
                                ? 'bg-teal-400 text-black hover:bg-cyan-400 w-full'
                                : 'bg-gray-700 hover:bg-cyan-400 hover:text-black w-full'
                        }  
                        `}
                    />
                </div>

                <div className="mr-5 w-full">
                    <ActionButton
                        title="Datos Laborales"
                        action={() => {
                            changeActiveView(2);
                        }}
                        customClass={`${
                            activeView === 2
                                ? 'bg-teal-400 text-black hover:bg-teal-400 w-full'
                                : 'bg-gray-700 hover:bg-cyan-400 hover:text-black w-full'
                        }  
                        `}
                    />
                </div>

                <div className="w-full">
                    <ActionButton
                        title="Contacto"
                        action={() => {
                            changeActiveView(3);
                        }}
                        customClass={`${
                            activeView === 3
                                ? 'bg-teal-400 text-black hover:bg-teal-400 w-full'
                                : 'bg-gray-700 hover:bg-cyan-400 hover:text-black w-full'
                        }  
                        `}
                    />
                </div>
            </div>

            <form onSubmit={onSubmit}>
                <div className="mt-5 bg-gray-600 p-5 rounded-md grid grid-cols-3 gap-5">
                    {activeView === 1 && (
                        <>
                            <TextInput
                                inputName={'name'}
                                inputType={'text'}
                                inputTitle={'Nombre'}
                                placeholder={'Nombre...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('nombre', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />

                            <TextInput
                                inputName={'apellido'}
                                inputType={'text'}
                                inputTitle={'Apellido'}
                                placeholder={'Apellido...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('apellido', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />

                            <TextInput
                                inputName={'cuit'}
                                inputType={'text'}
                                inputTitle={'Cuit/Cuil'}
                                placeholder={'Cuit/Cuil...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('cuit', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />

                            <TextInput
                                inputName={'nacimiento'}
                                inputType={'date'}
                                inputTitle={'Fecha de Nacimiento'}
                                placeholder={'Nacimiento...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('nacimiento', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />

                            <SelectInput
                                inputName={'civil'}
                                inputTitle={'Estado Civil'}
                                placeholder
                                options={EstadoCivilOptions}
                                registerForm={{ ...register('civil', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />

                            <TextInput
                                inputName={'provincia'}
                                inputType={'text'}
                                inputTitle={'Provincia'}
                                placeholder={'Direccion...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('provincia', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />

                            <TextInput
                                inputName={'localidad'}
                                inputType={'text'}
                                inputTitle={'Localidad'}
                                placeholder={'Localidad...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('localidad', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />

                            <TextInput
                                inputName={'direccion'}
                                inputType={'text'}
                                inputTitle={'Direccion Exacta'}
                                placeholder={'Direccion...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('direccion', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                        </>
                    )}

                    {activeView === 2 && (
                        <>
                            <SelectInput
                                inputName={'empresa'}
                                inputTitle={'Empresa'}
                                placeholder
                                options={empresaOptions}
                                registerForm={{ ...register('empresa', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />

                            <SelectInput
                                inputName={'contrato'}
                                inputTitle={'Contrato'}
                                placeholder
                                options={contratoOptions}
                                registerForm={{ ...register('contrato', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />

                            <SelectInput
                                inputName={'cese'}
                                inputTitle={'Cese'}
                                placeholder
                                options={ceseOptions}
                                registerForm={{ ...register('cese', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                        </>
                    )}

                    {activeView === 3 && (
                        <>
                            <TextInput
                                inputName={'correo'}
                                inputType={'email'}
                                inputTitle={'Correo Electronico'}
                                placeholder={'Correo...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('correo', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <TextInput
                                inputName={'telefono'}
                                inputType={'text'}
                                inputTitle={'Telefono'}
                                placeholder={'Telefono...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('telefono', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <TextInput
                                inputName={'telefonoAlternativo'}
                                inputType={'text'}
                                inputTitle={'Telefono Alternativo'}
                                placeholder={'Telefono...'}
                                keyPressEvent={() => {}}
                                registerForm={{
                                    ...register('telefonoAlternativo', { required: false }),
                                }}
                                customContainerClassName="mr-5 w-full"
                            />
                        </>
                    )}
                </div>

                <div className="flex justify-center">
                    <ActionButton
                        title="Registrar Cliente"
                        action={() => {}}
                        customClass="bg-teal-400 text-black hover:bg-teal-400 mt-10 "
                    />
                </div>
            </form>
        </Modal>
    );
};
