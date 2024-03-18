import { ActionButton } from '../../../../components/Buttons/ActionButton';

interface OptionsProps {
    newArticleModal: () => void;
}
export const OptionsHeader = ({ newArticleModal }: OptionsProps) => {
    return (
        <ActionButton
            title="Nuevo Articulo"
            customClass="bg-gray-800 text-white"
            action={newArticleModal}
        />
    );
};
