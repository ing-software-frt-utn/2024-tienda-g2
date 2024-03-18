import { LinkButton } from '../../../components/Buttons/LinkButton';

export const OptionsHeader = () => {
    return (
        <LinkButton
            link="/app/ventas/nueva-venta"
            title="Nueva Venta"
            customClass="bg-gray-800 text-white ml-2"
        />
    );
};
