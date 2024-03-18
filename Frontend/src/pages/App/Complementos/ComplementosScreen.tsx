import { useState } from 'react';
import { PageHeader } from '../../../components/PageHeader/PageHeader';
import { Categoria } from './Tipos/Categoria';
import { Marca } from './Tipos/Marca';
import { Talle } from './Tipos/Talle';
import { Color } from './Tipos/Color';
import { ActionButton } from '../../../components/Buttons/ActionButton';

export const ComplementosScreen = () => {
    const [selectedOption, setSelectedOption] = useState('Color');

    const changeOption = (option: string) => {
        setSelectedOption(option);
    };

    const tabContentComplementosOptions = [
        { value: 1, title: 'Color', component: <Color /> },
        { value: 2, title: 'Talle', component: <Talle /> },
        { value: 3, title: 'Marca', component: <Marca /> },
        { value: 4, title: 'Categoria', component: <Categoria /> },
    ];

    return (
        <section className="p-5">
            <PageHeader title="Gestion de complementos"></PageHeader>

            <div className="bg-gray-800 mx-auto w-3/6 mt-5 py-5 rounded-lg">
                <div className="flex justify-center">
                    {tabContentComplementosOptions.map(option => {
                        return (
                            <ActionButton
                                key={option.value}
                                title={option.title}
                                action={() => changeOption(option.title)}
                                customClass={`${
                                    selectedOption === option.title ? 'bg-cyan-500' : 'bg-gray-500'
                                } ml-3 mr-3 text-white`}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="mt-5">
                {tabContentComplementosOptions.map(option => {
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
