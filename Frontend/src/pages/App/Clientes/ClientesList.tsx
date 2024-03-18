/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { PageHeader } from '../../../components/PageHeader/PageHeader';
import { TableForUserList } from '../../../components/Table/TableForUserList';
import { PaginationSection } from '../../../components/Pagination/PaginationSection';
import { OptionsHeader } from './OptionsHeader';
import { tableUsersData } from '../../../data/mocks/tableUsersData';
import { FiltersSection } from './FiltersSection';
import { PopupModal } from '../../../components/Modals/PopupModal';

export const ClientesList = () => {
    const [showFilters, setShowFitlers] = useState(false);
    const [filterData, setFilterData] = useState({});
    const [current, setCurrent] = useState(1);

    const [openModalNewCliente, setOpenModalNewCliente] = useState(false);

    const onOpenModal = () => setOpenModalNewCliente(true);
    const onCloseModal = () => setOpenModalNewCliente(false);

    const onChangeCurrent = (value: number) => {
        setCurrent(value);
    };

    useEffect(() => {
        console.log('Cambiaron Los Filtros: ', filterData);
    }, [filterData]);

    return (
        <section className="p-5">
            <PageHeader title="Clientes de N&A">
                <OptionsHeader
                    setFilters={setShowFitlers}
                    filterValue={showFilters}
                    clienteModal={onOpenModal}
                />
            </PageHeader>

            {openModalNewCliente && (
                <PopupModal openValue={openModalNewCliente} closeFunction={onCloseModal} />
            )}

            {showFilters && (
                <div className="2xl:flex 2xl:justify-center">
                    <FiltersSection setFilterData={setFilterData} />
                </div>
            )}

            <div className="mt-6 overflow-x-auto">
                <TableForUserList data={tableUsersData} />
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
