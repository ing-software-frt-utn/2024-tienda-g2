import { Link } from 'react-router-dom';
import { Venta } from '../../interfaces/article';

interface Props {
    data: Venta[];
}

const formatDateForGrid = (dateString: string, dayAdd?: number): string => {
    // Crear un objeto Date a partir de la cadena de fecha
    const dateValue = new Date(dateString);

    // Sumar n días a la fecha si es necesario

    if (dayAdd) {
        dateValue.setDate(dateValue.getDate() + dayAdd);
    }

    // Obtener componentes de la fecha (día, mes, año)
    const day = dateValue.getDate().toString().padStart(2, '0');
    const month = (dateValue.getMonth() + 1).toString().padStart(2, '0');
    const year = dateValue.getFullYear();

    // Formatear la fecha en el formato deseado
    // const formattedDate = `${year}-${month}-${day}`;
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
};

export const TableForVentasList = ({ data }: Props) => {
    const headers = ['Cliente', 'Vendedor', 'Fecha', 'Tipo de Pago', 'Monto', 'Estado', 'Accion'];

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
                            {item.cliente.apellido + ' ' + item.cliente.nombre}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.vendedor.apellido + ' ' + item.vendedor.nombre}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {formatDateForGrid(item.fechaVenta)}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.pago === null ? '-' : item.pago.tipoPago.descripcion}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            $ {item.importe}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            <p
                                className={`rounded-md py-1 ${item.cae === null ? 'bg-orange-300 ' : 'bg-teal-300'}`}>
                                {item.cae === null ? 'Pendiente' : 'Finalizada'}
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
