/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { ActionButton } from '../../../components/Buttons/ActionButton';
import { SelectInput } from '../../../components/Inputs/SelectInput';
import { TextInput } from '../../../components/Inputs/TextInput';
import {
    ceseOptions,
    contratoOptions,
    empresaOptions,
    pageSizeOptions,
} from '../../../data/select/selectOptions';

type FormFilterValues = {
    nombre: string;
    apellido: string;
    cuit: string;
    empresa: string;
    contrato: string;
    cese: string;
    estado: string;
    pageSize: string;
};

interface Props {
    setFilterData: (value: any) => void;
}

export const FiltersSection = ({ setFilterData }: Props) => {
    const { register, handleSubmit, reset } = useForm<FormFilterValues>();

    const onSubmit = handleSubmit(data => {
        setFilterData(data);
    });

    const resetFilters = () => {
        reset();
        setFilterData({});
    };

    return (
        <form
            onSubmit={onSubmit}
            className="bg-gray-700 rounded-md mt-5 2xl:flex 2xl:justify-between">
            {' '}
            {/* 2xl:w-10/12 */}
            <div className="p-6 grid grid-cols-3 gap-4">
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
                    inputType={'string'}
                    inputTitle={'Cuit/Cuil'}
                    placeholder={'Cuit/Cuil...'}
                    keyPressEvent={() => {}}
                    registerForm={{ ...register('cuit', { required: false }) }}
                    customContainerClassName="mr-5 w-full"
                />

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
            </div>
            <div className="bg-gray-800 px-4 py-3 2xl:w-40 sm:px-6 rounded-md flex justify-between 2xl:block">
                <SelectInput
                    inputName={'pageSize'}
                    options={pageSizeOptions}
                    registerForm={{ ...register('pageSize', { required: false }) }}
                    customContainerClassName="w-28"
                    customInputClassName="text-center"
                />

                <div>
                    <ActionButton
                        type="submit"
                        title="Restablecer"
                        action={resetFilters}
                        customClass="border mr-5 2xl:mr-0 border-transparent bg-red-400 text-gray-950 hover:bg-cyan-400 text-sm font-medium px-6 2xl:mt-10 w-28"
                    />

                    <ActionButton
                        type="submit"
                        title="Aplicar"
                        action={() => {}}
                        customClass="border border-transparent bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm font-medium px-6 2xl:mt-5 w-28"
                    />
                </div>
            </div>
        </form>
    );
};
