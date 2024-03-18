import { useState } from 'react';
import { ArticleStock } from '../../../../../interfaces/article';

interface Props {
    data: {
        item: ArticleStock;
        quantity: number;
    }[];
    modifyQuantity: (item: any, quantity: number) => void;
}

export const ArticuloCartAction = ({
    item,
    quantity,
    modifyQuantity,
}: {
    item: ArticleStock;
    quantity: number;
    modifyQuantity: (item: any, quantity: number) => void;
}) => {
    const [quantityState, setQuantityState] = useState(quantity || 0);

    console.log('Quantity: ', quantityState);

    return (
        <div>
            <input
                type="text"
                value={quantityState}
                min={0}
                maxLength={item.cantidad}
                disabled
                max={Number(item.cantidad)}
                // onChange={e => setQuantityState(e.target.value as unknown as number)}
                className="bg-gray-300 w-14 rounded-md py-1 px-2 text-gray-900 text-center mr-4"
            />

            <button
                className="bg-teal-400 py-2 px-4 text-gray-900 rounded-md hover:bg-sky-500"
                onClick={() => {
                    setQuantityState((prev: number) => {
                        if (prev + 1 > item.cantidad) {
                            alert('La cantidad no puede ser mayor al stock');
                            return prev;
                        }

                        modifyQuantity(item, prev + 1);
                        return prev + 1;
                    });
                }}>
                +
            </button>
            <button
                className="bg-teal-400 py-2 px-4 text-gray-900 rounded-md hover:bg-sky-500 ml-4"
                onClick={() => {
                    setQuantityState((prev: number) => {
                        modifyQuantity(item, prev - 1);
                        return prev - 1;
                    });
                }}>
                -
            </button>
        </div>
    );
};

export const TableForArticulosVenta = ({ data, modifyQuantity }: Props) => {
    const headers = ['Articulo', 'Distribucion', 'Accion'];

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
                    <tr className="bg-white border-b" key={item.item.idInventario}>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.item.articuloDescripcion + ' - ' + item.item.articuloMarca}
                        </td>

                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.item.stockTalleTipoTalle +
                                ' - ' +
                                item.item.stockTalle +
                                ' - ' +
                                item.item.stockColor}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 whitespace-nowrap">
                            <ArticuloCartAction
                                item={item.item}
                                quantity={item.quantity}
                                modifyQuantity={modifyQuantity}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
