import { LinkButton } from '../../../../components/Buttons/LinkButton';

export const OptionsHeader = () => {
    return (
        <>
            <LinkButton
                link="/app/ventas"
                title="Volver"
                customClass="bg-gray-800 text-white ml-2"
            />
        </>
    );
};
