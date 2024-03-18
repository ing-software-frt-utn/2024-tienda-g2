import { useState } from 'react';
import { ActionButton } from '../../../../../components/Buttons/ActionButton';
import { CreditCard } from './CreditCard';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/dispatch.hook';
import { efectuarPago, getClienteReal } from '../../../../../redux/slices/venta';

export const Pago = () => {
    const dispatch = useAppDispatch();
    const { cliente, ventaSelected } = useAppSelector(state => state.venta);

    const [clienteAnonimoSelected, setClienteAnonimoSelected] = useState(true);
    const [clienteRealSelected, setClienteRealSelected] = useState(false);

    const [efectivoSelected, setEfectivoSelected] = useState(true);
    const [tarjetaSelected, setTarjetaSelected] = useState(false);

    const [searchCliente, setSearchCliente] = useState('');

    const selectTipoCliente = (type: number) => {
        if (type === 1) {
            setClienteAnonimoSelected(true);
            setClienteRealSelected(false);
        } else {
            setClienteAnonimoSelected(false);
            setClienteRealSelected(true);
        }
    };

    const selectTipoPago = (type: number) => {
        if (type === 1) {
            setEfectivoSelected(true);
            setTarjetaSelected(false);
        } else {
            setEfectivoSelected(false);
            setTarjetaSelected(true);
        }
    };

    const buscarCliente = () => {
        dispatch(getClienteReal(Number(searchCliente)));
    };

    const efectuarPagoEfectivo = () => {
        dispatch(
            efectuarPago(
                ventaSelected.id,
                Object.keys(cliente).length !== 0
                    ? cliente.idCliente
                    : ventaSelected.cliente.id,
                'Efectivo',
            ),
        );
    };

    return (
        <section className="bg-gray-800 rounded-md p-5">
            <h1 className="text-center text-2xl">Monto Total: {ventaSelected.importe}</h1>

            <div className="flex w-full mt-5">
                <div className="w-1/2 ">
                    <div className="bg-gray-500 mr-2 p-3 rounded-md">
                        <div className="flex justify-between">
                            <h1 className="text-lg mb-3">Tipo de Cliente:</h1>
                        </div>
                        <div className="p-3 bg-gray-800 rounded-md flex justify-center">
                            <div className="text-lg">
                                <p>Anonimo</p>
                                <input
                                    type="checkbox"
                                    className="ml-7 h-8 w-4"
                                    checked={clienteAnonimoSelected}
                                    onChange={() => selectTipoCliente(1)}
                                />
                            </div>
                            <div className="text-lg ml-10">
                                <p>Asociado</p>
                                <input
                                    type="checkbox"
                                    className="ml-7 h-8 w-4"
                                    checked={clienteRealSelected}
                                    onChange={() => selectTipoCliente(2)}
                                />
                            </div>
                        </div>

                        {clienteRealSelected && (
                            <>
                                <div className="border-gray-200 border-b-2 mt-3"></div>
                                <h1 className="mt-5 mb-3">Ingrese documentacion del Cliente:</h1>
                                <div className="flex w-2/3">
                                    <input
                                        type="number"
                                        name="searchCliente"
                                        className="bg-white rounded-md h-10 w-full mt-2 text-center text-black"
                                        placeholder="DNI/CUIT..."
                                        value={searchCliente}
                                        onChange={e => {
                                            setSearchCliente(e.target.value);
                                        }}
                                    />

                                    <ActionButton
                                        title="Buscar"
                                        action={buscarCliente}
                                        customClass="bg-gray-900 ml-3 hover:bg-indigo-400 hover:text-gray-900 mt-2"
                                    />
                                </div>

                                {Object.keys(cliente).length !== 0 && (
                                    <>
                                        <div className="border-gray-200 border-b-2 mt-8"></div>

                                        <div className="mt-3">
                                            <div className="flex">
                                                <p className="text-center mt-3 mr-12">Nombre</p>
                                                <input
                                                    type="text"
                                                    value={
                                                        cliente?.nombre + ' ' + cliente?.apellido
                                                    }
                                                    disabled
                                                    className="bg-white text-black rounded-md w-full mt-2 h-10 text-center"
                                                />
                                            </div>

                                            {/* <div className="flex">
                                                <p className="text-center mt-3 mr-10">Direccion</p>
                                                <input
                                                    type="text"
                                                    value={cliente?.direccion}
                                                    disabled
                                                    className="bg-white text-black rounded-md w-full mt-2 h-10 text-center"
                                                />
                                            </div> */}

                                            <div className="flex">
                                                <p className="text-center mt-3 mr-10">DNI/CUIT</p>
                                                <input
                                                    type="text"
                                                    value={cliente?.dni}
                                                    disabled
                                                    className="bg-white text-black rounded-md w-full mt-2 h-10 text-center"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="bg-gray-500 mr-2 p-3 rounded-md">
                        <div className="flex justify-between">
                            <h1 className="text-lg mb-3">Tipo de Pago:</h1>
                        </div>
                        <div className="p-3 bg-gray-800 rounded-md flex justify-center">
                            <div className="text-lg">
                                <p>Efectivo</p>
                                <input
                                    type="checkbox"
                                    className="ml-7 h-8 w-4"
                                    checked={efectivoSelected}
                                    onChange={() => selectTipoPago(1)}
                                />
                            </div>
                            <div className="text-lg ml-10">
                                <p>Tarjeta</p>
                                <input
                                    type="checkbox"
                                    className="ml-5 h-8 w-4"
                                    checked={tarjetaSelected}
                                    onChange={() => selectTipoPago(2)}
                                />
                            </div>
                        </div>

                        {tarjetaSelected && (
                            <>
                                <div className="border-gray-200 border-b-2 mt-3"></div>
                                <div className="mt-2">
                                    <CreditCard
                                        clientes={{
                                            anonimo: clienteAnonimoSelected,
                                            real: clienteRealSelected,
                                            data:
                                                Object.keys(cliente).length !== 0 ? cliente : null,
                                        }}
                                    />
                                </div>
                            </>
                        )}

                        {efectivoSelected && (
                            <div className="flex justify-center">
                                <ActionButton
                                    title="Efectuar Pago"
                                    type="button"
                                    action={efectuarPagoEfectivo}
                                    customClass="bg-gray-900 ml-3 hover:bg-teal-400 hover:text-gray-900 mt-8"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
