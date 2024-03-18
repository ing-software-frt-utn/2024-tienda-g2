import { ActionButton } from '../../../../../components/Buttons/ActionButton';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/dispatch.hook';
import { finalizarVenta } from '../../../../../redux/slices/venta';

export const Resumen = () => {
    const dispatch = useAppDispatch();
    const { cliente, ventaSelected } = useAppSelector(state => state.venta);

    const abreviatura =
        Object.keys(cliente).length !== 0
            ? cliente?.abreviaturaCondicionTrib
            : ventaSelected?.cliente?.condicionTributaria?.abreviatura;

    const dni =
        abreviatura === 'CF'
            ? 12345678
            : Object.keys(cliente).length !== 0
              ? Number(cliente?.cuil.replace(/-/g, ''))
              : 12345678;

    const finishVenta = () => {
        dispatch(finalizarVenta(ventaSelected?.id, abreviatura, dni, ventaSelected?.importe));
    };

    return (
        <div>
            <div className="flex place-content-center items-center h-96 bg-slate-500">
                <div>
                    <div>Aqui va el Template de la Factura / Recibo </div>
                    <ActionButton
                        title="FINALIZAR VENTA"
                        action={finishVenta}
                        customClass="bg-gray-900 text-white hover:bg-cyan-400 hover:text-gray-900 mt-10"
                    />
                    <div className="mt-10">Resumen de Venta:</div>
                    <p>Sarasa sarasa </p>
                </div>
            </div>
        </div>
    );
};
