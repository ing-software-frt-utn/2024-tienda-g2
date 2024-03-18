import { useForm } from 'react-hook-form';
import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { TableForColorList } from '../../../../components/Table/TableForComplementosList';
// import { tableColorData } from '../../../../data/mocks/tableComplementosData';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/dispatch.hook';
import {
    addComplemento,
    getComplementosList,
    updateComplemento,
} from '../../../../redux/slices/complementos';

type FormFilterValues = {
    color: string;
};

export const Color = () => {
    const dispatch = useAppDispatch();

    const {
        complementoList,
        isLoading: isColorListLoading,
        complementoChange,
    } = useAppSelector((state: any) => state.complementos);

    const {
        register,
        handleSubmit,
        setValue: setInputFormValue,
    } = useForm<FormFilterValues>({
        defaultValues: { color: '' },
    });

    const [colorSelected, setColorSelected] = useState({
        idColor: 0,
        nombre: '',
    });

    const [isEdit, setIsEdit] = useState(false);

    const obtenerColor = (idColor: number, nombre: string) => {
        const colorSelectedPrev = colorSelected;
        setColorSelected({ idColor, nombre });

        setInputFormValue('color', nombre);

        colorSelectedPrev.nombre === '' && setIsEdit(true);
    };

    const cleanForm = () => {
        setColorSelected({
            idColor: 0,
            nombre: '',
        });
        setInputFormValue('color', '');
        setIsEdit(false);
    };

    const onSubmit = handleSubmit(data => {
        const { idColor } = colorSelected;

        const body = {
            nombre: data.color,
        };

        isEdit
            ? dispatch(updateComplemento({ ...body, idColor }, '/Color'))
            : dispatch(addComplemento(body, '/Color'));
    });

    useEffect(() => {
        dispatch(getComplementosList('/Color'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [complementoChange]);

    return (
        <section className="p-5">
            <div className="md:flex bg-gray-800 rounded-lg shadow-lg shadow-gray-400 p-5">
                <div className="md:w-1/2 p-5">
                    <div className="border-2 border-white rounded-lg">
                        <TableForColorList
                            data={
                                isColorListLoading
                                    ? []
                                    : complementoList !== undefined &&
                                        complementoList.length > 0 &&
                                        complementoList !== null
                                      ? complementoList
                                      : []
                            }
                            getColor={obtenerColor}
                        />
                    </div>
                </div>
                <div className="md:w-1/2 p-5">
                    <form onSubmit={onSubmit} className="bg-white rounded-lg">
                        <h1 className="text-gray-900 text-xl font-medium text-center p-4">
                            {!isEdit ? 'Agregar Nuevo Color' : 'Editar Color'}
                        </h1>
                        <div className="border-b border-gray-400"></div>
                        <TextInput
                            // value={colorSelected}
                            inputName={'color'}
                            inputType={'text'}
                            inputTitle={'Color'}
                            placeholder={'...'}
                            keyPressEvent={() => {}}
                            registerForm={{ ...register('color', { required: false }) }}
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
