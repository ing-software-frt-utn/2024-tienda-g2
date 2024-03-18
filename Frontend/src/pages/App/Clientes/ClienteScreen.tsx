import { PageHeader } from '../../../components/PageHeader/PageHeader';
import { ActionButton } from '../../../components/Buttons/ActionButton';

export const ClienteScreen = () => {
    return (
        <section className="p-5">
            <PageHeader title="Informacion del Cliente">
                {/* <OptionsHeader setFilters={setShowFitlers} filterValue={showFilters} clienteModal={onOpenModal} /> */}
                <ActionButton
                    title="Volver al Listado"
                    action={() => {}}
                    customClass="bg-gray-900"
                />
            </PageHeader>

            <div className="flex w-full mt-5">
                {/* <div className="w-1/4">
                    <div className="bg-white shadow-lg shadow-gray-400 p-5 rounded-md text-center h-72">
                        <button className="bg-gray-900 py-3 px-4 rounded-md text-white mt-2 block w-full">Datos Personales</button>
                        <button className="bg-gray-900 py-3 px-4 rounded-md text-white mt-4 block w-full">Datos Laborales</button>
                        <button className="bg-gray-900 py-3 px-4 rounded-md text-white mt-4 block w-full">Expedientes</button>
                        <button className="bg-gray-900 py-3 px-4 rounded-md text-white mt-4 block w-full">Consultas</button>
                    </div>

                    <div className="bg-white shadow-lg shadow-gray-400 p-5 rounded-md text-center mt-5">
                        <button className="bg-cyan-500 py-3 px-4 rounded-md text-white mt-2 block w-full">Opcion Extra 1</button>
                        <button className="bg-cyan-500 py-3 px-4 rounded-md text-white mt-4 block w-full">Opcion Extra 2</button>
                        <button className="bg-cyan-500 py-3 px-4 rounded-md text-white mt-4 block w-full">Opcion Extra 3</button>

                    </div>
                </div> */}

                <div className="bg-white text-black shadow-lg shadow-gray-400 w-3/4 p-5 mr-5 rounded-md ">
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                </div>

                <div className="w-1/4">
                    <div className="bg-white shadow-lg shadow-gray-400 p-5 rounded-md text-center h-72">
                        <button className="bg-teal-300 py-3 px-4 rounded-md text-black mt-2 block w-full">
                            Datos Personales
                        </button>
                        <button className="bg-gray-900 py-3 px-4 rounded-md text-white mt-4 block w-full">
                            Datos Laborales
                        </button>
                        <button className="bg-gray-900 py-3 px-4 rounded-md text-white mt-4 block w-full">
                            Expedientes
                        </button>
                        <button className="bg-gray-900 py-3 px-4 rounded-md text-white mt-4 block w-full">
                            Consultas
                        </button>
                    </div>

                    <div className="bg-white shadow-lg shadow-gray-400 p-5 rounded-md text-center mt-5">
                        <button className="bg-cyan-500 py-3 px-4 rounded-md text-white mt-2 block w-full">
                            Opcion Extra 1
                        </button>
                        <button className="bg-cyan-500 py-3 px-4 rounded-md text-white mt-4 block w-full">
                            Opcion Extra 2
                        </button>
                        <button className="bg-cyan-500 py-3 px-4 rounded-md text-white mt-4 block w-full">
                            Opcion Extra 3
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
