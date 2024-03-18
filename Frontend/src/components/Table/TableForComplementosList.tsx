interface ColorProps {
    data: {
        idColor: number;
        nombre: string;
    }[];
    getColor: (idColor: number, nombre: string) => void;
}
interface MarcaProps {
    data: {
        idMarca: number;
        nombre: string;
    }[];
    getMarca: (idMarca: number, nombre: string) => void;
}
interface TalleProps {
    data: {
        idTalle: number;
        talleArticulo: string;
        idTipoTalle: number;
        descripcion: string;
    }[];
    getTalle: (
        idTalle: number,
        talleArticulo: string,
        idTipoTalle: number,
        descripcion: string,
    ) => void;
}
interface CategoriaProps {
    data: {
        idCategoria: number;
        descripcion: string;
    }[];
    getCategoria: (idCategoria: number, descripcion: string) => void;
}

export const TableForColorList = ({ data, getColor }: ColorProps) => {
    const headers = ['Color', 'Accion'];
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
                {data.map((item, index) => (
                    <tr className="bg-white border-b" key={index}>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.nombre}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap flex ">
                            <button
                                className="py-2 px-4 text-white rounded-md hover:bg-black bg-cyan-500 flex-auto mr-2 w-1"
                                onClick={() => {
                                    getColor(item.idColor, item.nombre);
                                }}>
                                Modificar
                            </button>
                            {/* <button className="py-2 px-4 text-white rounded-md bg-red-600 hover:bg-black flex-auto ml-2">
                                Eliminar
                            </button> */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const TableForCategoriaList = ({ data, getCategoria }: CategoriaProps) => {
    // const headers = ['Categoria', 'Accion'];
    const headers = ['Categoria'];
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
                {data.map((item, index) => (
                    <tr className="bg-white border-b" key={index}>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.descripcion}
                        </td>
                        {/* <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap flex ">
                            <button
                                className="py-2 px-4 text-white rounded-md hover:bg-black bg-cyan-500 flex-auto mr-2"
                                onClick={() => {
                                    getCategoria(item.idCategoria, item.descripcion);
                                }}>
                                Modificar
                            </button>
                            <button className="py-2 px-4 text-white rounded-md bg-red-600 hover:bg-black flex-auto ml-2">
                                Eliminar
                            </button>
                        </td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const TableForMarcaList = ({ data, getMarca }: MarcaProps) => {
    const headers = ['Marca', 'Accion'];
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
                {data.map((item, index) => (
                    <tr className="bg-white border-b" key={index}>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.nombre}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap flex justify-center">
                            <button
                                className="py-2 px-4 text-white rounded-md hover:bg-black bg-cyan-500  mr-2 w-32"
                                onClick={() => {
                                    getMarca(item.idMarca, item.nombre);
                                }}>
                                Modificar
                            </button>
                            {/* <button className="py-2 px-4 text-white rounded-md bg-red-600 hover:bg-black flex-auto ml-2">
                                Eliminar
                            </button> */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const TableForTalleList = ({ data, getTalle }: TalleProps) => {
    // const headers = ['Talle', 'Tipo de talle', 'Accion'];
    const headers = ['Talle', 'Tipo de talle'];

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
                {data.map((item, index) => (
                    <tr className="bg-white border-b" key={index}>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.talleArticulo}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.descripcion}
                        </td>
                        {/* <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap flex ">
                            <button
                                className="py-2 px-4 text-white rounded-md hover:bg-black bg-cyan-500 flex-auto mr-2"
                                onClick={() => {
                                    getTalle(
                                        item.idTalle,
                                        item.talleArticulo,
                                        item.idTipoTalle,
                                        item.descripcion,
                                    );
                                }}>
                                Modificar
                            </button>
                        </td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
