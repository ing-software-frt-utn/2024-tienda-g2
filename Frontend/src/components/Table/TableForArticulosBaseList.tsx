import { Article } from '../../interfaces/article';
import { TableButton } from '../Buttons/ActionButton';

interface Props {
    data: Article[];
    openStateModal: (type: 'active' | 'inactive') => void;
    openProductModal: (type: 'new' | 'edit', article: Article | null) => void;
}

export const TableForArticulosBaseList = ({ data, openProductModal }: Props) => {
    const headers = [
        'Codigo de barra',
        'Descripcion',
        'Coste Final',
        'Ganancia',
        'Marca',
        'Categoria',
        // 'Estado',
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
                        <td className="text-sm text-gray-900 px-6 py-5 whitespace-nowrap font-bold">
                            {item.codigoBarras}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.descripcion}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.precioFinal ?? 0}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.margenGanancia * 100 + '%'}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.marcaNombre}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.categoriaDescripcion}
                        </td>
                        {/* <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            <p
                                className={`rounded-md py-1 ${item.estado === 'Activo' ? 'bg-teal-300 ' : 'bg-indigo-300'}`}>
                                {item.estado}
                            </p>
                        </td> */}
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap">
                            <TableButton
                                title="Modificar"
                                action={() => {
                                    openProductModal('edit', item);
                                }}
                                customClass="text-white rounded-md bg-cyan-500 hover:bg-black mr-2 w-24"
                            />
                            {/* <TableButton
                                title={item.estado === 'Activo' ? 'Deshabilitar' : 'Activar'}
                                action={() => {
                                    openStateModal(
                                        item.estado === 'Activo' ? 'inactive' : 'active',
                                    );
                                }}
                                customClass={`rounded-md ${item.estado === 'Activo' ? 'bg-red-600 text-white ' : 'bg-teal-300 text-black hover:text-white'} hover:bg-black ml-2 w-24`}
                            /> */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
