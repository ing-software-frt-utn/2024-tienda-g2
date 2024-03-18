import { useForm } from 'react-hook-form';
import { TableForMarcaList } from '../../../../components/Table/TableForComplementosList';
// import { tableMarcaData } from '../../../../data/mocks/tableComplementosData';
import { useEffect, useState } from 'react';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { ActionButton } from '../../../../components/Buttons/ActionButton';
import {
    addComplemento,
    getComplementosList,
    updateComplemento,
} from '../../../../redux/slices/complementos';
import { useAppDispatch, useAppSelector } from '../../../../hooks/dispatch.hook';

type FormFilterValues = {
    marca: string;
};

export const Marca = () => {
    const dispatch = useAppDispatch();

    const {
        complementoList,
        isLoading: isMarcaListLoading,
        complementoChange,
    } = useAppSelector((state: any) => state.complementos);

    const {
        register,
        handleSubmit,
        setValue: setInputFormValue,
    } = useForm<FormFilterValues>({
        defaultValues: { marca: '' },
    });

    const [marcaSelected, setMarcaSelected] = useState({
        idMarca: 0,
        nombre: '',
    });

    const [isEdit, setIsEdit] = useState(false);

    const obtenerMarca = (idMarca: number, nombre: string) => {
        const marcaSelectedPrev = marcaSelected;
        setMarcaSelected({ idMarca, nombre });

        setInputFormValue('marca', nombre);

        marcaSelectedPrev.nombre === '' && setIsEdit(true);
    };

    const cleanForm = () => {
        setMarcaSelected({
            idMarca: 0,
            nombre: '',
        });
        setInputFormValue('marca', '');
        setIsEdit(false);
    };

    const onSubmit = handleSubmit(data => {
        const { idMarca } = marcaSelected;

        const body = {
            nombre: data.marca,
        };

        isEdit
            ? dispatch(updateComplemento({ ...body, idMarca }, '/Marca'))
            : dispatch(addComplemento(body, '/Marca'));
    });

    useEffect(() => {
        dispatch(getComplementosList('/Marca'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [complementoChange]);

    return (
        <section className="p-5">
            <div className="md:flex bg-gray-800 rounded-lg shadow-lg shadow-gray-400 p-5">
                <div className="md:w-1/2 p-5">
                    <div className="border-2 border-white rounded-lg">
                        <TableForMarcaList
                            data={
                                isMarcaListLoading
                                    ? []
                                    : complementoList !== undefined &&
                                        complementoList.length > 0 &&
                                        complementoList !== null
                                      ? complementoList
                                      : []
                            }
                            getMarca={obtenerMarca}
                        />
                    </div>
                </div>
                <div className="md:w-1/2 p-5">
                    <form onSubmit={onSubmit} className="bg-white rounded-lg">
                        <h1 className="text-gray-900 text-xl font-medium text-center p-4">
                            {!isEdit ? 'Agregar Nueva Marca' : 'Editar Marca'}
                        </h1>
                        <div className="border-b border-gray-400"></div>
                        <TextInput
                            // value={colorSelected}
                            inputName={'Marca'}
                            inputType={'text'}
                            inputTitle={'Marca'}
                            placeholder={'...'}
                            keyPressEvent={() => {}}
                            registerForm={{ ...register('marca', { required: false }) }}
                            customContainerClassName="ml-5 mr-5 pt-5 text-center text-black"
                        />
                        <div className="border-b border-gray-400 mt-10"></div>
                        <div
                            className={`flex ${isEdit ? 'justify-between p-4' : 'justify-end p-4'}`}>
                            {isEdit && (
                                <ActionButton
                                    type="button"
                                    title="Limpiar"
                                    action={cleanForm}
                                    customClass="border border-transparent bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm font-medium  w-28"
                                />
                            )}

                            <ActionButton
                                type="submit"
                                title={isEdit ? 'Modificar' : 'Agregar'}
                                customClass="border border-transparent bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm font-medium  w-28"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
