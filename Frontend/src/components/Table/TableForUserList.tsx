import { Link } from 'react-router-dom';

interface Props {
    data: {
        id: number;
        nombre: string;
        apellido: string;
        documento: string;
        empresa: string;
        contrato: string;
        cese: string;
        estado: string;
    }[];
}

export const TableForUserList = ({ data }: Props) => {
    const headers = [
        'Nombre',
        'Apellido',
        'Documento',
        'Empresa',
        'Contrato',
        'Cese',
        'Estado',
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
                            {item.nombre}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.apellido}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.documento}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.empresa}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.contrato}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.cese}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            <p
                                className={`rounded-md py-1 ${item.estado === 'Activo' ? 'bg-teal-300 ' : 'bg-indigo-300'}`}>
                                {item.estado}
                            </p>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap">
                            <Link
                                to={`/app/ventas/${item.id}`}
                                className="bg-slate-900 py-2 px-4 text-white rounded-md hover:bg-sky-500">
                                Visualizar
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
