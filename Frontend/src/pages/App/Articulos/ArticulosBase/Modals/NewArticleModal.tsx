/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { ActionButton } from '../../../../../components/Buttons/ActionButton';
import { TextInput, TextInputDisabled } from '../../../../../components/Inputs/TextInput';
import { ReactSelect } from '../../../../../components/Inputs/ReactSelect';
import { GenericModal } from '../../../../../components/Modals/GenericModal';
import { ModalContext } from '../../../../../context/modal.context';
import { Article } from '../../../../../interfaces/article';
import { getComplementosOptionsList } from '../../../../../redux/slices/complementos';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/dispatch.hook';
import { createArticle, updateArticle } from '../../../../../redux/slices/articulos';

interface Props {
    value: boolean;
    type: 'new' | 'edit';
    article: Article | null;
}

type FormFilterValues = {
    descripcion: string;
    codigoBarras: string;
    costo: number;
    margenGanancia: number;
    marca: string;
    categoria: string;
    porcentajeIVA: number;
    precioFinal: number;
    netoGravado: number;
};

type SelectedOptionType = {
    value: string | number;
    label: string;
};

type NameSelectInputs = 'marca' | 'categoria';

export const NewArticleModal = ({ value, type }: Props) => {
    const { complementoList } = useAppSelector(state => state.complementos);
    const { articuloSelected } = useAppSelector(state => state.articulos);

    const dispatch = useAppDispatch();

    const { closeModal, openModal, state } = useContext(ModalContext);
    const { register, handleSubmit, setValue, control, getValues } = useForm<FormFilterValues>();

    const costo = useWatch({ name: 'costo', control, defaultValue: 0 });
    const margenGanancia = useWatch({ name: 'margenGanancia', control, defaultValue: 0 });
    const porcentajeIVA = useWatch({ name: 'porcentajeIVA', control, defaultValue: 0 });

    const [selectValues, setSelectValues] = useState({
        marca: { label: '', value: '' },
        categoria: { label: '', value: '' },
    });

    const handleChangeSelect = (name: NameSelectInputs, selectedOption: SelectedOptionType) => {
        setSelectValues(prevValues => ({ ...prevValues, [name]: selectedOption }));
        setValue(name, selectedOption.value as string);
    };

    const onSubmit = handleSubmit(data => {
        const dataToSend: Article = {
            codigoBarras: data.codigoBarras as unknown as string,
            descripcion: data.descripcion,
            marcaId: Number(selectValues.marca.value),
            marcaNombre: selectValues.marca.label,
            categoriaId: Number(selectValues.categoria.value),
            categoriaDescripcion: selectValues.categoria.label,
            costo: data.costo,
            margenGanancia: data.margenGanancia / 100,
            porcentajeIVA: data.porcentajeIVA / 100,
            netoGravado: data.netoGravado,
            precioFinal: data.precioFinal,
        };

        if (type === 'edit') {
            dataToSend.id = articuloSelected?.id;
        }

        const action = type === 'new' ? createArticle : updateArticle;
        dispatch(action(dataToSend, closeModal));
    });

    useEffect(() => {
        value && openModal();
    }, [value]);

    useEffect(() => {
        if (costo === undefined || margenGanancia === undefined || porcentajeIVA === undefined) {
            return;
        }

        const netoGravado = Number(costo) + Number(costo) * (Number(margenGanancia) / 100);
        const iva = netoGravado * (Number(porcentajeIVA) / 100);

        setValue('netoGravado', netoGravado);
        setValue('precioFinal', netoGravado + iva);
    }, [costo, margenGanancia, porcentajeIVA]);

    useEffect(() => {
        dispatch(getComplementosOptionsList());

        if (type === 'edit' && articuloSelected !== null) {
            setValue('codigoBarras', articuloSelected?.codigoBarras);
            setValue('descripcion', articuloSelected?.descripcion);
            setValue('costo', articuloSelected?.costo);
            setValue('margenGanancia', Number(articuloSelected?.margenGanancia) * 100);
            setValue('porcentajeIVA', Number(articuloSelected?.porcentajeIVA) * 100);
            setValue('netoGravado', articuloSelected?.netoGravado);
            setValue('precioFinal', articuloSelected?.precioFinal);
            setValue('marca', articuloSelected?.marcaNombre);
            setValue('categoria', articuloSelected?.categoriaDescripcion);

            setSelectValues({
                marca: {
                    label: articuloSelected?.marcaNombre,
                    value: articuloSelected?.marcaId.toString(),
                },
                categoria: {
                    label: articuloSelected?.categoriaDescripcion,
                    value: articuloSelected?.categoriaId.toString(),
                },
            });
        }
    }, []);

    return (
        <>
            {value && (
                <GenericModal closeFunction={closeModal} openValue={state}>
                    <h1>ABRISTE: {type as string}</h1>
                    <form onSubmit={onSubmit} className="">
                        <div className="grid grid-cols-3 gap-4 p-4">
                            <TextInput
                                inputName={'codigoBarra'}
                                inputType={'text'}
                                inputTitle={'Codigo de barras'}
                                placeholder={'...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('codigoBarras', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <ReactSelect
                                inputTitle="Marca"
                                value={selectValues.marca}
                                onChange={selectedOption =>
                                    handleChangeSelect(
                                        'marca',
                                        selectedOption || { value: '', label: '' },
                                    )
                                }
                                options={
                                    complementoList !== undefined &&
                                    complementoList !== null &&
                                    complementoList.marcaList !== undefined
                                        ? complementoList.marcaList.map((item: any) => ({
                                              value: item.idMarca,
                                              label: item.nombre,
                                          }))
                                        : []
                                }
                                isSearchable
                            />

                            <ReactSelect
                                inputTitle="Categoria"
                                value={selectValues.categoria}
                                onChange={selectedOption =>
                                    handleChangeSelect(
                                        'categoria',
                                        selectedOption || { value: '', label: '' },
                                    )
                                }
                                options={
                                    complementoList !== undefined &&
                                    complementoList !== null &&
                                    complementoList.categoriaList !== undefined
                                        ? complementoList.categoriaList.map((item: any) => ({
                                              value: item.idCategoria,
                                              label: item.descripcion,
                                          }))
                                        : []
                                }
                                isSearchable
                            />
                            <TextInput
                                inputName={'costo'}
                                inputType={'number'}
                                inputTitle={'Costo'}
                                placeholder={'$ X'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('costo', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <TextInput
                                inputName={'margenGanancia'}
                                inputType={'number'}
                                inputTitle={'Margen de ganancia'}
                                placeholder={'X%'}
                                keyPressEvent={() => {}}
                                registerForm={{
                                    ...register('margenGanancia', { required: false }),
                                }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <TextInput
                                inputName={'porcentajeIVA'}
                                inputType={'number'}
                                inputTitle={'Porcentaje de IVA'}
                                placeholder={'X%'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('porcentajeIVA', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <TextInputDisabled
                                inputName={'netoGravado'}
                                inputTitle={'Neto gravado'}
                                placeholder={'...'}
                                keyPressEvent={() => {}}
                                disabled
                                value={getValues().netoGravado}
                                customContainerClassName="mr-5 w-full"
                            />
                            <TextInputDisabled
                                inputName={'precioFinal'}
                                inputTitle={'Precio final'}
                                placeholder={'...'}
                                keyPressEvent={() => {}}
                                disabled
                                value={getValues().precioFinal}
                                customContainerClassName="mr-5 w-full"
                            />

                            <TextInput
                                inputName={'descripcion'}
                                inputType={'text'}
                                inputTitle={'Descripcion'}
                                placeholder={'Descripcion...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('descripcion', { required: false }) }}
                                customContainerClassName="mr-5 w-full col-span-3"
                            />
                        </div>
                        <div className="flex justify-end">
                            <ActionButton
                                title={type === 'new' ? 'Crear Articulo' : 'Modificar Articulo'}
                                type="submit"
                                action={() => {}}
                                customClass="bg-teal-400 text-black hover:bg-teal-400 mt-5 "
                            />
                        </div>
                    </form>
                </GenericModal>
            )}
        </>
    );
};
