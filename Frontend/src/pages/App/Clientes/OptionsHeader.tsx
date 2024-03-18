import { ActionButton } from "../../../components/Buttons/ActionButton";

interface OptionsProps {
    filterValue: boolean;
    setFilters: (value: boolean) => void;
    clienteModal: () => void;
}

export const OptionsHeader = ({ filterValue, setFilters, clienteModal }: OptionsProps) => {
    return (
        <>
            <ActionButton
                title={filterValue ? 'Ocultar Filtros' : 'Mostrar Filtros'}
                action={() => setFilters(!filterValue)}
                customClass={`mr-5 text-white ${filterValue ? 'bg-gray-800' : 'bg-gray-800'}`}
            />
            <ActionButton
                title="Nuevo Cliente"
                customClass="bg-gray-800 text-white"
                action={clienteModal}
            />
        </>
    )
}
