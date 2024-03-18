import { useState } from 'react';
import Cards, { Focused } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { ActionButton } from '../../../../../components/Buttons/ActionButton';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/dispatch.hook';
import { efectuarPago } from '../../../../../redux/slices/venta';

interface Props {
    clientes: {
        anonimo: boolean;
        real: boolean;
        data: any;
    };
}

export const CreditCard = ({ clientes }: Props) => {
    const dispatch = useAppDispatch();
    const { ventaSelected } = useAppSelector(state => state.venta);

    const [state, setState] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: '',
    });

    const handleInputChange = (e: any) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleFocusChange = (e: any) => {
        setState({
            ...state,
            focus: e.target.name,
        });
    };

    const processPayment = () => {
        if (!clientes.real) {
            alert('Para pagos con tarjeta el cliente real es obligatorio');
            return;
        }

        if (
            state.number.length < 16 ||
            state.name.length < 5 ||
            state.expiry.length < 4 ||
            state.cvc.length < 3
        ) {
            alert('Todos los campos de la tarjeta son obligatorios');
            return;
        }

        if (clientes.data === null) {
            alert('El cliente real no esta seleccionado');
            return;
        }

        const payload = {
            numeroTarjeta: state.number,
            nombreTitular: state.name,
            mesVencimiento: state.expiry[0] + state.expiry[1],
            anioVencimiento: state.expiry[2] + state.expiry[3],
            cvc: state.cvc,
            dniTitular: clientes.data.dni,
        };

        dispatch(efectuarPago(ventaSelected.id, clientes.data.idCliente, 'Tarjeta', payload));

        console.log('Payload: ', payload);
    };

    return (
        <div className="flex justify-between">
            <div className="w-2/5 mt-4">
                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus as Focused | undefined}
                />
            </div>
            <form className="w-3/5">
                <div className="p-3 w-full text-center flex justify-end">
                    <label htmlFor="number" className="mr-5 mt-1">
                        Nro de tarjeta:
                    </label>
                    <input
                        type="number"
                        name="number"
                        id="number"
                        maxLength={16}
                        className="bg-white rounded-md h-8 w-64 text-gray-900 p-2"
                        onChange={handleInputChange}
                        onFocus={handleFocusChange}
                    />
                </div>

                <div className="p-3 w-full text-center flex justify-end -mt-1">
                    <label htmlFor="name" className="mr-5 mt-1">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        maxLength={30}
                        className="bg-white rounded-md h-8 w-64 text-gray-900 p-2"
                        onChange={handleInputChange}
                        onFocus={handleFocusChange}
                    />
                </div>

                <div className="p-3 w-full text-center flex justify-end -mt-1">
                    <label htmlFor="expiry" className="mr-5 mt-1">
                        Expiración:
                    </label>
                    <input
                        type="text"
                        name="expiry"
                        id="expiry"
                        maxLength={4}
                        className="bg-white rounded-md h-8 w-64 text-gray-900 p-2"
                        onChange={handleInputChange}
                        onFocus={handleFocusChange}
                    />
                </div>
                <div className="p-3 w-full text-center flex justify-end -mt-1">
                    <label htmlFor="cvc" className="mr-5 mt-1">
                        CVC:
                    </label>
                    <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        maxLength={4}
                        className="bg-white rounded-md h-8 w-64 text-gray-900 p-2"
                        onChange={handleInputChange}
                        onFocus={handleFocusChange}
                    />
                </div>

                <ActionButton
                    title="Efectuar Pago"
                    type="button"
                    action={() => processPayment()}
                    customClass="bg-gray-900 ml-3 hover:bg-teal-400 hover:text-gray-900 mt-8"
                />
            </form>
        </div>
    );
};
