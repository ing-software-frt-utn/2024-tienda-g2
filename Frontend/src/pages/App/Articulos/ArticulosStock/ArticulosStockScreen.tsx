import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { PageHeader } from '../../../../components/PageHeader/PageHeader';
import { TableForArticulosStockList } from '../../../../components/Table/TableForArticulosStockList';
import { PaginationSection } from '../../../../components/Pagination/PaginationSection';
import { ModalContext } from '../../../../context/modal.context';
import { tableArticulosStockData } from '../../../../data/mocks/tableArticulosStockData';
import { StateModal } from './StateModal';
import React, { useState, useEffect } from 'react';

export const ArticulosStockScreen = () => {
    const [current, setCurrent] = useState(1);

    const onChangeCurrent = (value: number) => {
        setCurrent(value);
    };
    const { state } = React.useContext(ModalContext);
    const [openModalState, setOpenModalState] = useState(false);

    const openModalStateType = () => {
        setOpenModalState(true);
    };
    useEffect(() => {
        if (!state) {
            setOpenModalState(false);
        }
    }, [state]);
    return (
        <section>
            <PageHeader title="Articulos en Stock" />

            <StateModal value={openModalState} />
            <div className="flex justify-center bg-gray-800 mx-auto w-2/6 mt-5 py-5 rounded-lg">
                <div>
                    <TextInput
                        // value={colorSelected}
                        inputName={''}
                        inputType={'text'}
                        placeholder={'Codigo de articulo'}
                        keyPressEvent={() => {}}
                        // registerForm={{ ...('#', { required: false }) }}
                        registerForm={() => {}}
                        customContainerClassName="text-center text-black pr-6 mb-2"
                    />
                </div>
                <div>
                    <ActionButton
                        type="button"
                        title={'Search'}
                        customClass="border border-transparent bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm mt-2"
                    />
                </div>
            </div>
            <div className="mt-6 overflow-x-auto">
                <TableForArticulosStockList
                    data={tableArticulosStockData}
                    openStateModal={openModalStateType}
                />
            </div>

            <PaginationSection
                current={current}
                changeCurrent={onChangeCurrent}
                pageSize={10}
                totalElements={100}
            />
        </section>
    );
};
