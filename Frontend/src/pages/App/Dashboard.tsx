import { PageHeader } from '../../components/PageHeader/PageHeader';
import ig from '../../assets/social/instagram.svg';
import gm from '../../assets/social/gmail.svg';
import dv from '../../assets/social/drive.svg';
import cl from '../../assets/social/calendar.svg';
import { PierChart } from '../../components/Graphics/PieChart';

const OptionsDashboard = () => {
    const cambiarColor = () => {
        const nuevoColor = prompt('Ingrese un nuevo color:'); // Puedes obtener el nuevo color de cualquier manera que prefieras
        if (nuevoColor) {
            document.documentElement.style.setProperty('--user-bg-color', nuevoColor);
        }
    };

    return (
        <div className="flex justify-between">
            <button className="p-1 rounded-lg mr-5 hover:bg-gray-700" onClick={cambiarColor}>
                <img src={ig} className="w-10 p-1" />
            </button>

            <button className="p-1 rounded-lg mr-5 hover:bg-gray-700">
                <img src={gm} className="w-10" />
            </button>

            <button className="p-1 rounded-lg mr-5 hover:bg-gray-700">
                <img src={dv} className="w-10" />
            </button>

            <button className="p-1 rounded-lg hover:bg-gray-700">
                <img src={cl} className="w-10" />
            </button>
        </div>
    );
};

export const Dashboard = () => {
    return (
        <section className="p-5">
            <PageHeader title="Dashboard" subtitle="Bienvenido a Nader & Asociados">
                <OptionsDashboard />
            </PageHeader>

            <div className="mt-5 text-red-600 md:flex">
                <div className="w-full md:w-2/3">
                    <div className="md:mr-20 bg-white rounded-lg shadow-lg shadow-gray-400 p-5">
                        <h1 className="text-gray-900 text-xl font-medium">Organizacion Agencias</h1>
                        <TableTele />
                    </div>
                </div>

                <div className="w-full mt-8 md:w-1/3 md:mt-0">
                    <div className=" bg-white rounded-lg shadow-lg shadow-gray-400 p-5">
                        <h1 className="text-gray-900 text-xl font-medium">Distribucion Laboral</h1>
                        <DistribucionLaboral />
                    </div>
                </div>
            </div>

            <div className="block 3xl:flex 3xl:justify-between">
                <div className="md:w-full md:flex 3xl:w-1/2 3xl:block">
                    <div className="w-full mt-6 bg-white rounded-lg shadow-lg shadow-gray-400 p-5 mr-10">
                        <h1 className="text-gray-900 text-xl font-medium">Historial Clientes</h1>
                        <RangoClientes />
                    </div>

                    <div className="w-full mt-6 bg-white rounded-lg shadow-lg shadow-gray-400 p-5 ">
                        <h1 className="text-gray-900 text-xl font-medium">Rango Consultas</h1>
                        <RangoConsultas />
                    </div>
                </div>

                <div className="hidden 3xl:block w-1/2 mt-6">
                    <GraphicContainer />
                </div>
            </div>
        </section>
    );
};
const TableTele = () => {
    return (
        <div className="min-w-full overflow-hidden rounded-lg shadow mt-5 overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th
                            scope="col"
                            className="px-5 py-3 text-sm font-medium text-left text-gray-100 uppercase bg-gray-900 border-b border-gray-400">
                            Agencia
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 text-sm font-medium text-center text-gray-100 uppercase bg-gray-900 border-b border-gray-400">
                            Casos
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 text-sm font-medium text-center text-gray-100 uppercase bg-gray-900 border-b border-gray-400">
                            Clientes
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-5 py-5 text-sm bg-white border-b border-l border-gray-300">
                            <p className="text-gray-900 whitespace-no-wrap">Teleperformance</p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-300 text-center">
                            <span className="text-gray-900 bg-teal-300 px-4 py-2 rounded-lg font-bold">
                                12
                            </span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-r border-gray-300 text-center">
                            <span className="text-gray-900 bg-cyan-300 px-4 py-2 rounded-lg font-bold">
                                200
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-5 text-sm bg-white border-b border-l border-gray-300">
                            <p className="text-gray-900 whitespace-no-wrap">Atento</p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-300 text-center">
                            <span className="text-gray-900 bg-teal-300 px-4 py-2 rounded-lg font-bold">
                                12
                            </span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-r border-gray-300 text-center">
                            <span className="text-gray-900 bg-cyan-300 px-4 py-2 rounded-lg font-bold">
                                200
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-5 text-sm bg-white border-b border-l border-gray-300">
                            <p className="text-gray-900 whitespace-no-wrap">Aegis</p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-300 text-center">
                            <span className="text-gray-900 bg-teal-300 px-4 py-2 rounded-lg font-bold">
                                12
                            </span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-r border-gray-300 text-center">
                            <span className="text-gray-900 bg-cyan-300 px-4 py-2 rounded-lg font-bold">
                                200
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const DistribucionLaboral = () => {
    return (
        <div className="mt-4">
            <div className="py-4">
                <div className="flex justify-between">
                    <p className="text-gray-500 font-medium">Empleado 1</p>
                    <p className="text-black font-bold text-lg">40%</p>
                </div>

                <div className="w-full h-2 bg-gray-300 rounded-full mt-3">
                    <div className="w-2/5 h-full bg-indigo-300 rounded-full"></div>
                </div>
            </div>

            <div className="py-4">
                <div className="flex justify-between">
                    <p className="text-gray-500 font-medium">Empleado 2</p>
                    <p className="text-black font-bold text-lg">35%</p>
                </div>

                <div className="w-full h-2 bg-gray-300 rounded-full mt-3">
                    <div className="w-1/3 h-full bg-red-300 rounded-full"></div>
                </div>
            </div>

            <div className="py-4">
                <div className="flex justify-between">
                    <p className="text-gray-500 font-medium">Empleado 3</p>
                    <p className="text-black font-bold text-lg">25%</p>
                </div>

                <div className="w-full h-2 bg-gray-300 rounded-full mt-3">
                    <div className="w-1/4 h-full bg-amber-300 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

const RangoClientes = () => {
    return (
        <div className="mt-7 flex justify-between">
            <div className="flex justify-between bg-gray-950 p-3 rounded-lg w-1/2 sm:w-1/3">
                <div>
                    <p className="text-xl text-gray-400">Agos</p>
                    <p className="font-bold text-2xl text-teal-300">45</p>
                </div>

                <div className="flex rotate-180">
                    <div className="w-3 h-10 bg-cyan-400"></div>
                    <div className="w-3 h-7 bg-cyan-400 ml-1"></div>
                    <div className="w-3 h-8 bg-cyan-400 ml-1"></div>
                    <div className="w-3 h-5 bg-cyan-400 ml-1"></div>
                </div>
            </div>

            <div className="flex justify-between bg-gray-950 p-3 rounded-lg w-1/2 sm:w-1/3 ml-5 h-24">
                <div>
                    <p className="text-xl text-gray-400">Sept</p>
                    <p className="font-bold text-2xl text-teal-300">45</p>
                </div>

                <div className="flex rotate-180">
                    <div className="w-3 h-10 bg-cyan-400"></div>
                    <div className="w-3 h-7 bg-cyan-400 ml-1"></div>
                    <div className="w-3 h-8 bg-cyan-400 ml-1"></div>
                    <div className="w-3 h-5 bg-cyan-400 ml-1"></div>
                </div>
            </div>
            <div className="hidden sm:flex justify-between bg-gray-950 p-3 rounded-lg w-1/2 sm:w-1/3 ml-5 h-24">
                <div>
                    <p className="text-xl text-cyan-400">Oct</p>
                    <p className="font-bold text-2xl text-teal-300">45</p>
                </div>

                <div className="flex rotate-180">
                    <div className="w-3 h-10 bg-cyan-400"></div>
                    <div className="w-3 h-7 bg-cyan-400 ml-1"></div>
                    <div className="w-3 h-8 bg-cyan-400 ml-1"></div>
                    <div className="w-3 h-5 bg-cyan-400 ml-1"></div>
                </div>
            </div>
        </div>
    );
};

const RangoConsultas = () => {
    return (
        <div className="mt-7 flex justify-between">
            <div className="flex justify-between bg-gray-950 p-3 rounded-lg w-1/2 sm:w-1/3">
                <div>
                    <p className="text-xl text-gray-400">Nov</p>
                    <p className="font-bold text-2xl text-teal-300">4</p>
                </div>

                <div className="flex rotate-180">
                    <div className="w-3 h-10 bg-indigo-400"></div>
                    <div className="w-3 h-7 bg-indigo-400 ml-1"></div>
                    <div className="w-3 h-8 bg-indigo-400 ml-1"></div>
                    <div className="w-3 h-5 bg-indigo-400 ml-1"></div>
                </div>
            </div>

            <div className="flex justify-between bg-gray-950 p-3 rounded-lg w-1/2 sm:w-1/3 ml-5 h-24">
                <div>
                    <p className="text-xl text-gray-400">Dic</p>
                    <p className="font-bold text-2xl text-teal-300">3</p>
                </div>

                <div className="flex rotate-180 rotate">
                    <div className="w-3 h-10 bg-indigo-400"></div>
                    <div className="w-3 h-7 bg-indigo-400 ml-1"></div>
                    <div className="w-3 h-8 bg-indigo-400 ml-1"></div>
                    <div className="w-3 h-5 bg-indigo-400 ml-1"></div>
                </div>
            </div>

            <div className="hidden sm:flex justify-between bg-gray-950 p-3 rounded-lg w-1/2 sm:w-1/3 ml-5 h-24">
                <div>
                    <p className="text-xl text-cyan-400">Ene</p>
                    <p className="font-bold text-2xl text-teal-300">3</p>
                </div>

                <div className="flex rotate-180 rotate">
                    <div className="w-3 h-10 bg-indigo-400"></div>
                    <div className="w-3 h-7 bg-indigo-400 ml-1"></div>
                    <div className="w-3 h-8 bg-indigo-400 ml-1"></div>
                    <div className="w-3 h-5 bg-indigo-400 ml-1"></div>
                </div>
            </div>
        </div>
    );
};

const GraphicContainer = () => {
    return (
        <section className="ml-20 bg-white rounded-lg shadow-lg shadow-gray-400">
            <h1 className="absolute text-gray-900 text-2xl font-medium ml-10 mt-5">Casos</h1>

            <PierChart />
        </section>
    );
};
