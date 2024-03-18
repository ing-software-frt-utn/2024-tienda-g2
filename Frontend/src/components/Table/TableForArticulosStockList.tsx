import { TableButton } from '../Buttons/ActionButton';

interface Props {
    data: {
        id: number;
        codigoBarra: number;
        descripcion: string;
        marca: string;
        categoria: string;
        tipoTalle: string;
        talle: string;
        color: string;
    }[];

    openStateModal: () => void;
}

export const TableForArticulosStockList = ({ data, openStateModal }: Props) => {
    const headers = [
        'Codigo de barra',
        'Descripcion',
        'Marca',
        'Categproa',
        'Tipo de Talle',
        'Talle',
        'Color',
        'Accion',
    ];

    return (
        <table className="table border text-center rounded-lg overflow-hidden w-full">
            <thead className="border-b bg-gray-800">
                <tr>
                    {headers.map(item => (
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-100 px-0 py-4 text-center"
                            key={item}>
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr className="bg-white border-b" key={item.id}>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.codigoBarra}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.descripcion}
                        </td>

                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.marca}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.categoria}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.tipoTalle}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.talle}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.color}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap">
                            <TableButton
                                title="Modificar"
                                action={() => {
                                    openStateModal();
                                }}
                                customClass="text-white rounded-md bg-cyan-500 hover:bg-black mr-2 w-24"
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
