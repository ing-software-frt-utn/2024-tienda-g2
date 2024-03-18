import { useForm } from 'react-hook-form';
import { TableForTalleList } from '../../../../components/Table/TableForComplementosList'; // Asegúrate de tener este componente
// import { tableTalleData } from '../../../../data/mocks/tableComplementosData'; // Asegúrate de tener estos datos
import { useEffect, useState } from 'react';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { ActionButton } from '../../../../components/Buttons/ActionButton';
import {
    addComplemento,
    getTallesList,
    updateComplemento,
} from '../../../../redux/slices/complementos';
import { ReactSelect } from '../../../../components/Inputs/ReactSelect';
import { useAppDispatch, useAppSelector } from '../../../../hooks/dispatch.hook';

type FormFilterValues = {
    tipoTalle: number;
    talle: string;
};

type NameSelectInputs = 'tipoTalle';

type SelectedOptionType = {
    value: string;
    label: string;
};

export const Talle = () => {
    const dispatch = useAppDispatch();

    const {
        complementoList,
        isLoading: isTalleListLoading,
        complementoChange,
    } = useAppSelector(state => state.complementos);

    const { register, handleSubmit, setValue: setInputFormValue } = useForm<FormFilterValues>({});

    const [selectValues, setSelectValues] = useState({
        tipoTalle: { label: '', value: '' },
    });

    const handleChangeSelect = (name: NameSelectInputs, selectedOption: SelectedOptionType) => {
        setSelectValues(prevValues => ({ ...prevValues, [name]: selectedOption }));
        setInputFormValue(name, Number(selectedOption.value)); // Actualizar valor en react-hook-form
    };

    const [talleSelected, setTalleSelected] = useState({
        idTalle: 0,
        talleArticulo: '',
        idTipoTalle: 0,
        descripcion: '',
    });

    const [isEdit, setIsEdit] = useState(false);

    const obtenerTalle = (
        idTalle: number,
        talleArticulo: string,
        idTipoTalle: number,
        descripcion: string,
    ) => {
        const talleSelectedPrev = talleSelected;
        setTalleSelected({
            idTalle,
            talleArticulo,
            idTipoTalle,
            descripcion,
        });

        setSelectValues({
            tipoTalle: { value: idTipoTalle as unknown as string, label: descripcion },
        });

        setInputFormValue('tipoTalle', idTipoTalle);
        setInputFormValue('talle', talleArticulo);

        talleSelectedPrev.talleArticulo === '' && setIsEdit(true);
    };

    const cleanForm = () => {
        setTalleSelected({
            idTalle: 0,
            talleArticulo: '',
            idTipoTalle: 0,
            descripcion: '',
        });
        setInputFormValue('tipoTalle', 0);
        setInputFormValue('talle', '');
        setIsEdit(false);
    };

    const onSubmit = handleSubmit(data => {
        const { idTalle } = talleSelected;

        const body = {
            talleArticulo: data.talle,
            idTipoTalle: data.tipoTalle,
            Descripcion: '',
        };

        isEdit
            ? dispatch(updateComplemento({ ...body, idTalle }, '/Talle'))
            : dispatch(addComplemento(body, '/Talle'));
    });

    useEffect(() => {
        dispatch(getTallesList('/Talle'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [complementoChange]);

    return (
        <section className="p-5">
            <div className="md:flex bg-gray-800 rounded-lg shadow-lg shadow-gray-400 p-5">
                <div className="md:w-1/2 p-5">
                    <div className="border-2 border-white rounded-lg">
                        <TableForTalleList
                            data={
                                isTalleListLoading
                                    ? []
                                    : complementoList.tallesList !== undefined &&
                                        complementoList.tallesList.length > 0 &&
                                        complementoList.tallesList !== null
                                      ? complementoList.tallesList
                                      : []
                            }
                            getTalle={obtenerTalle}
                        />
                    </div>
                </div>
                <div className="md:w-1/2 p-5">
                    <form onSubmit={onSubmit} className="bg-white rounded-lg">
                        <h1 className="text-gray-900 text-xl font-medium text-center p-4">
                            {!isEdit ? 'Agregar Nuevo Talle' : 'Editar Talle'}
                        </h1>
                        <div className="border-b border-gray-400"></div>

                        <ReactSelect
                            inputTitle="Tipo Talle"
                            value={selectValues.tipoTalle}
                            onChange={selectedOption =>
                                handleChangeSelect(
                                    'tipoTalle',
                                    {
                                        value: selectedOption!.value as string,
                                        label: selectedOption!.label,
                                    } || { value: '', label: '' },
                                )
                            }
                            options={
                                complementoList.tipoTallesList !== undefined
                                    ? complementoList.tipoTallesList.map((item: any) => ({
                                          value: item.idTipoTalle,
                                          label: item.descripcion,
                                      }))
                                    : []
                            }
                            isSearchable
                            customInputContainer="ml-5 mr-5 pt-5 text-center text-black"
                        />

                        <TextInput
                            inputName={'Talle'}
                            inputType={'text'}
                            inputTitle={'Talle'}
                            placeholder={'...'}
                            keyPressEvent={() => {}}
                            registerForm={{ ...register('talle', { required: false }) }}
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
