import { useState } from 'react';
import { ArticleStock } from '../../../../../interfaces/article';

interface Props {
    data?: ArticleStock[];
    addItemToCart: (item: any, quantity: number) => void;
    cart: any;
}

interface ArticuloActionProps {
    addItemToCart: (item: any, quantity: number) => void;
    item: any;
    cart: any;
}

export const ArticuloAction = ({ addItemToCart, item, cart }: ArticuloActionProps) => {
    const [quantity, setQuantity] = useState(0);

    const isArticleInCart = cart.find((i: any) => i.item.idInventario === item.idInventario);

    return (
        <div>
            <input
                type="number"
                value={quantity}
                min={0}
                max={Number(item.cantidad)}
                onChange={e => setQuantity(e.target.value as unknown as number)}
                className="bg-gray-300 w-14 rounded-md py-1 px-2 text-gray-900 text-center"
            />

            <button
                className={
                    isArticleInCart
                        ? 'bg-gray-400 py-2 px-4 text-gray-900 rounded-md ml-4'
                        : 'bg-teal-400 py-2 px-4 text-gray-900 rounded-md hover:bg-sky-500 ml-4'
                }
                onClick={() => addItemToCart(item, quantity as number)}
                disabled={isArticleInCart}>
                Agregar
            </button>
        </div>
    );
};

export const TableForArticulosStock = ({ data, addItemToCart, cart }: Props) => {
    const headers = ['Talle', 'Color', 'Cantidad', 'Accion'];

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
                {data!.map((item, index) => (
                    <tr className="bg-white border-b" key={index}>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.stockTalleTipoTalle + ' || ' + item.stockTalle}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.stockColor}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.cantidad}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 whitespace-nowrap flex justify-center mt-3">
                            <ArticuloAction addItemToCart={addItemToCart} item={item} cart={cart} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
