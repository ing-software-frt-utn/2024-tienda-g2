import { useState } from 'react';
import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { PageHeader } from '../../../../components/PageHeader/PageHeader';
import { OptionsHeader } from './OptionsHeader';
import { Articulos } from './Sections/Articulos';
import { Pago } from './Sections/Pago';
import { Resumen } from './Sections/Resumen';

export const NuevaVenta = () => {
    const [selectedOption, setSelectedOption] = useState('Articulos');

    const changeOption = (option: string) => {
        setSelectedOption(option);
    };

    const tabContentAlumnoOptions = [
        { value: 1, title: 'Articulos', component: <Articulos /> },
        { value: 2, title: 'Pago', component: <Pago /> },
        { value: 3, title: 'Resumen', component: <Resumen /> },
    ];

    return (
        <section className="p-5">
            <PageHeader title="Nueva Venta">
                <OptionsHeader />
            </PageHeader>

            <div className="bg-gray-800 mx-auto w-3/6 3xl:w-2/5 mt-5 py-5 rounded-lg">
                <div className="flex justify-center">
                    {tabContentAlumnoOptions.map(option => {
                        return (
                            <ActionButton
                                key={option.value}
                                title={option.title}
                                action={() => changeOption(option.title)}
                                customClass={`${
                                    selectedOption === option.title ? 'bg-cyan-500' : 'bg-gray-500'
                                } ml-3 text-white`}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="mt-5">
                {tabContentAlumnoOptions.map(option => {
                    return (
                        <div key={option.value}>
                            {selectedOption === option.title && option.component}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
