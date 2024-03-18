import { ToastNotification } from '../../../components/Notifications/ToastNotification';
import { AppAPI } from '../../api/AppAPI';
import {
    setVentaSelectedData,
    startLoadingVentaProcess,
    setClienteData,
    setVentasData,
    setVentaFinalizadaData,
} from './ventaSlice';

interface CartParams {
    quantity: number;
    item: any;
}
[];

export const getVentasList = () => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingVentaProcess());

        try {
            const { data: responseData, status } = await AppAPI().get(`/Venta/`);

            if (status === 200) {
                dispatch(
                    setVentasData({
                        ventaList: responseData,
                    }),
                );
            }
        } catch (error: any) {
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            console.log('ERROR:', error);
        }
    };
};

const getCartPayload = (cart: any) => {
    const payload = {
        venta: {
            sucursalID: 6,
            vendedorID: 12,
        },
        lineasVenta: cart.map((item: any) => {
            return {
                Cantidad: item.quantity,
                StockID: item.item.idStock,
                VentaID: 0,
            };
        }),
    };

    return payload;
};

export const createVentaInitial = (cart: CartParams) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingVentaProcess());

        const payload = getCartPayload(cart);

        try {
            const { data: responseData, status } = await AppAPI().post(
                '/Venta/postVentaYLineas',
                payload,
            );

            if (status === 200) {
                dispatch(
                    setVentaSelectedData({
                        ventaSelected: responseData,
                    }),
                );

                // dispatch(startVentaChangeProcess());
                ToastNotification.fire({
                    icon: 'success',
                    title: 'Articulos Agregados Correctamente a la Venta',
                });
            }
        } catch (error: any) {
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            console.log('ERROR:', error);
        }
    };
};

export const getClienteReal = (dni: number) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingVentaProcess());

        try {
            const { data: responseData, status } = await AppAPI().get(
                `/Cliente/getClienteByIdOrDni?idordni=${dni}`,
            );

            // console.log(responseData);

            if (status === 200) {
                dispatch(
                    setClienteData({
                        cliente: responseData,
                    }),
                );
            }
        } catch (error: any) {
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            console.log('ERROR:', error);
        }
    };
};

export const efectuarPago = (
    idVenta: number,
    idCliente: number,
    metodoPago: 'Efectivo' | 'Tarjeta',
    infoPago?: any,
) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingVentaProcess());

        console.log('ID DEL CLIENTE: ', idCliente);

        try {
            const { data: responseClienteData, status: statusCliente } = await AppAPI().put(
                `/Venta/updateClienteVenta?idVenta=${idVenta}&IdCliente=${idCliente}`,
            );

            if (statusCliente === 200) {
                if (metodoPago === 'Efectivo') {
                    const { data: responsePagoData, status: statusPago } = await AppAPI().post(
                        `/Pago/Pagar`,
                        {
                            idTipoPago: 7,
                            idVenta,
                        },
                    );

                    console.log('Response: ', responsePagoData);

                    if (statusPago === 200) {
                        dispatch(
                            setVentaSelectedData({
                                ventaSelected: responsePagoData,
                            }),
                        );
                    }
                }

                if (metodoPago === 'Tarjeta') {
                    const payloadToken = {
                        card_number: infoPago.numeroTarjeta,
                        card_expiration_month: infoPago.mesVencimiento,
                        card_expiration_year: infoPago.anioVencimiento,
                        security_code: infoPago.cvc,
                        card_holder_name: infoPago.nombreTitular,
                        card_holder_identification: {
                            type: 'dni',
                            number: String(infoPago.dniTitular),
                        },
                    };

                    console.log('Payload Token: ', payloadToken);

                    const { data: responseTokenData, status: statusToken } = await AppAPI().post(
                        `/Pago/tokenTarjeta`,
                        payloadToken,
                    );

                    if (statusToken === 200) {
                        console.log({
                            idTipoPago: 8,
                            idVenta,
                            token: responseTokenData.id,
                            tipoTarjeta: 'Credito',
                        });

                        const { data: responsePagoData, status: statusPago } = await AppAPI().post(
                            `/Pago/Pagar`,
                            {
                                idTipoPago: 8,
                                idVenta,
                                token: responseTokenData.id,
                                tipoTarjeta: 'Credito',
                            },
                        );

                        if (statusPago === 200) {
                            dispatch(
                                setVentaSelectedData({
                                    ventaSelected: responsePagoData,
                                }),
                            );
                        }
                    }
                }
            }

            ToastNotification.fire({ icon: 'success', title: 'Pago Realizado con Exito' });
        } catch (error: any) {
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            console.log('ERROR:', error);
        }
    };
};

export const finalizarVenta = (
    idVenta: number,
    CondicionTributaria: 'RI' | 'M' | 'E' | 'CF' | 'NR',
    numeroDocumento: number,
    ImporteTotal: number,
) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingVentaProcess());

        const payload = {
            ImporteTotal,
            numeroDocumento,
            CondicionTributaria,
            idVenta,
        };

        try {
            const { data: responseData, status } = await AppAPI().post(
                `/ExternalAPIs/conectarAfip`,
                payload,
            );

            if (status === 200) {
                dispatch(
                    setVentaFinalizadaData({
                        ventaFinalizada: responseData,
                    }),
                );
                ToastNotification.fire({ icon: 'success', title: 'Entre al Status' });
            }

            setTimeout(() => {
                ToastNotification.fire({ icon: 'success', title: 'Venta Finalizada con Exito' });
            }, 3000);
        } catch (error: any) {
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            console.log('ERROR:', error);
        }
    };
};
