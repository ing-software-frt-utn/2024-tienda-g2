import { useEffect, useState } from 'react';
import { ActionButton } from '../../../../../components/Buttons/ActionButton';
import { TextInput } from '../../../../../components/Inputs/TextInput';
import { TableForArticulosStock } from './TableForArticulosStock';
import { TableForArticulosVenta } from './TableForArticulosVenta';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/dispatch.hook';
import { getComplementosList, getInventarioList } from '../../../../../redux/slices/inventario';
import { ReactSelect } from '../../../../../components/Inputs/ReactSelect';
import { createVentaInitial } from '../../../../../redux/slices/venta';
import { useReactHookForm } from '../../../../../hooks/useReactHookForm';

type FormFilterValues = {
    codigoBarra: string;
    tipoTalle: string;
    talle: string;
    color: string;
};

export const Articulos = () => {
    const dispatch = useAppDispatch();
    const { inventarioList, isLoading, complementosList } = useAppSelector(
        state => state.inventario,
    );

    const [cart, setCart] = useState<any>([]);

    const { register, handleSubmit, handleChangeSelect, selectValues } =
        useReactHookForm<FormFilterValues>({
            initialValues: {
                codigoBarra: '',
                tipoTalle: '',
                talle: '',
                color: '',
            },
        });

    const onSubmit = handleSubmit(data => {
        if (data.codigoBarra === '') {
            alert('El campo de codigo de barra no puede estar vacio');
            return;
        }

        const payload = {
            idSucursal: 6,
            codigoBarra: data.codigoBarra,
            idTipoTalle: data.tipoTalle !== '' ? data.tipoTalle : null,
            idTalle: data.talle !== '' ? data.talle : null,
            idColor: data.color !== '' ? data.color : null,
        };

        if (
            (payload.idTipoTalle === null && payload.idTalle !== null) ||
            (payload.idTalle === null && payload.idTipoTalle !== null)
        ) {
            alert('Debe seleccionar un tipo de talle y un talle');
            return;
        }

        dispatch(getInventarioList(payload));
    });

    const addItemToCart = (item: any, quantity: number) => {
        const payload = {
            item,
            quantity: Number(quantity),
        };

        if (quantity <= 0) {
            alert('La cantidad debe ser mayor a 0');
            return;
        }

        if (cart.length > 0) {
            const itemIndex = cart.findIndex(
                (i: any) => i.item.idInventario === payload.item.idInventario,
            );
            if (itemIndex >= 0) {
                const newCart = cart.map((i: any) => {
                    if (i.item.idInventario === payload.item.idInventario) {
                        return {
                            ...i,
                            quantity: i.quantity + payload.quantity,
                        };
                    }
                    return i;
                });

                setCart(newCart);
                return;
            }
        }

        setCart([...cart, payload]);

        console.log('Payload: ', payload);
    };

    const modifyQuantity = (item: any, quantity: number) => {
        if (quantity > item.cantidad) {
            alert('La cantidad no puede ser mayor al stock');
            return;
        }

        if (quantity <= 0) {
            const newCart = cart.filter((i: any) => i.item.idInventario !== item.idInventario);
            setCart(newCart);
            return;
        }

        const newCart = cart.map((i: any) => {
            if (i.item.idInventario === item.idInventario) {
                return {
                    ...i,
                    quantity,
                };
            }
            return i;
        });

        setCart(newCart);
    };

    const finishCartProcess = () => {
        dispatch(createVentaInitial(cart));
    };

    useEffect(() => {
        dispatch(getComplementosList());
    }, []);

    return (
        <section className="bg-gray-800 rounded-md p-5">
            <form onSubmit={onSubmit}>
                <div className=" p-3 flex rounded-md">
                    <div className="flex w-11/12">
                        <TextInput
                            inputTitle="Codigo de Barra:"
                            inputName={'codigoBarra'}
                            inputType={'text'}
                            placeholder={'Codigo de Articulo...'}
                            keyPressEvent={() => {}}
                            registerForm={{ ...register('codigoBarra', { required: false }) }}
                            customContainerClassName="w-1/4"
                        />

                        <ReactSelect
                            inputTitle="Tipo Talle:"
                            customInputContainer="w-1/4 mx-5"
                            value={selectValues.tipoTalle}
                            onChange={selectedOption =>
                                handleChangeSelect(
                                    'tipoTalle',
                                    selectedOption || { value: '', label: '' },
                                )
                            }
                            options={
                                complementosList !== undefined &&
                                complementosList !== null &&
                                complementosList.tipoTallesList !== undefined
                                    ? [
                                          { value: '', label: '' },
                                          ...complementosList.tipoTallesList.map((item: any) => ({
                                              value: item.idTipoTalle,
                                              label: item.descripcion,
                                          })),
                                      ]
                                    : []
                            }
                            isSearchable
                        />

                        <ReactSelect
                            inputTitle="Talle:"
                            customInputContainer="w-1/4 ml-0 mr-5"
                            value={selectValues.talle}
                            onChange={selectedOption =>
                                handleChangeSelect(
                                    'talle',
                                    selectedOption || { value: '', label: '' },
                                )
                            }
                            options={
                                complementosList !== undefined &&
                                complementosList !== null &&
                                complementosList.tallesList !== undefined
                                    ? [
                                          { value: '', label: '' },
                                          ...complementosList.tallesList.map((item: any) => ({
                                              value: item.idTalle,
                                              label: item.talleArticulo,
                                          })),
                                      ]
                                    : []
                            }
                            isSearchable
                        />

                        <ReactSelect
                            inputTitle="Color:"
                            customInputContainer="w-1/4"
                            value={selectValues.color}
                            onChange={selectedOption =>
                                handleChangeSelect(
                                    'color',
                                    selectedOption || { value: '', label: '' },
                                )
                            }
                            options={
                                complementosList !== undefined &&
                                complementosList !== null &&
                                complementosList.colorList !== undefined
                                    ? [
                                          { value: '', label: '' },
                                          ...complementosList.colorList.map((item: any) => ({
                                              value: item.idColor,
                                              label: item.nombre,
                                          })),
                                      ]
                                    : []
                            }
                            isSearchable
                        />
                    </div>

                    <div className="border-gray-200 border-l-2 ml-10"></div>

                    <div className="flex justify-center ml-10 w-2/12">
                        <ActionButton
                            title="Buscar"
                            type="submit"
                            customClass="bg-gray-900 ml-3 hover:bg-indigo-400 hover:text-gray-900 align-middle mt-4 mb-4"
                        />
                    </div>
                </div>
            </form>

            {inventarioList.length !== 0 && (
                <div className="flex w-full mt-5">
                    <div className="w-1/2 ">
                        <div className="bg-gray-500 mr-2 p-3 rounded-md">
                            <div className="flex justify-between">
                                <h1 className="text-lg mb-3">Articulo Seleccionado:</h1>
                            </div>
                            <div className="p-3 bg-gray-800 rounded-md">
                                {inventarioList && inventarioList.length > 0 && (
                                    <h1 className="text-lg">
                                        <span className="text-red-400 font-bold text-lg">
                                            Elemento:
                                        </span>{' '}
                                        {inventarioList[0].articuloDescripcion}
                                    </h1>
                                )}
                                <h1 className="text-lg">
                                    <span className="text-red-400 font-bold text-lg">
                                        Categoria:
                                    </span>{' '}
                                    {inventarioList[0].articuloCategoria}
                                </h1>
                                <h1 className="text-lg">
                                    <span className="text-red-400 font-bold">Marca:</span>{' '}
                                    {inventarioList[0].articuloMarca}
                                </h1>
                            </div>
                            <div className="border-gray-200 border-b-2 mt-3"></div>
                            <h1 className="mt-5 mb-3">Listado de Unidades en Inventario:</h1>

                            <TableForArticulosStock
                                // data={dataInventario}
                                data={isLoading ? [] : inventarioList}
                                addItemToCart={addItemToCart}
                                cart={cart}
                            />
                        </div>
                    </div>
                    <div className="w-1/2">
                        {cart.length > 0 && (
                            <>
                                <div className="bg-gray-500 ml-2 p-3 rounded-md">
                                    <h1 className="text-center text-xl font-bold mb-3">
                                        Articulos Agregados a la Venta
                                    </h1>
                                    <TableForArticulosVenta
                                        data={cart}
                                        modifyQuantity={modifyQuantity}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <ActionButton
                                        title="Proceder a Venta"
                                        customClass="bg-cyan-500 mt-5 hover:bg-indigo-400 hover:text-gray-900"
                                        action={finishCartProcess}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};
