import React, { useState, useEffect } from 'react';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { PageHeader } from '../../../../components/PageHeader/PageHeader';
import { OptionsHeader } from './OptionsHeader';
import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { PaginationSection } from '../../../../components/Pagination/PaginationSection';
import { TableForArticulosBaseList } from '../../../../components/Table/TableForArticulosBaseList';
import { ModalContext } from '../../../../context/modal.context';
import { NewArticleModal } from './Modals/NewArticleModal';
import {
    getArticulosBaseList,
    setArticuloSelected,
    setArticulosBaseListBySearch,
} from '../../../../redux/slices/articulos';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../hooks/dispatch.hook';
import { Article } from '../../../../interfaces/article';

type FormFilterValues = {
    search: string;
};

export const ArticulosBaseScreen = () => {
    const { state } = React.useContext(ModalContext);

    const dispatch = useAppDispatch();

    const {
        articulosList,
        isLoading: isArticulosListLoading,
        articuloChange,
    } = useAppSelector(state => state.articulos);

    const { register, handleSubmit } = useForm<FormFilterValues>({});

    const [searchChange, setSearchChange] = useState(0);

    const [current, setCurrent] = useState(1);
    const [articulosListCopy, setArticulosListCopy] = useState([]);

    const onChangeCurrent = (value: number) => {
        setCurrent(value);
    };

    const [openModalProduct, setOpenModalProduct] = useState(false);
    const [typeModalProduct, setTypeModalProduct] = useState<'new' | 'edit'>('new');

    // const [openModalState, setOpenModalState] = useState(false);
    // const [typeModalState, setTypeModalState] = useState<'active' | 'inactive'>('active');

    // const openModalStateType = (type: 'active' | 'inactive') => {
    //     setOpenModalState(true);
    //     setTypeModalState(type);
    // };

    const openModalProductType = (type: 'new' | 'edit', article: Article | null) => {
        if (type === 'edit' && article) {
            dispatch(setArticuloSelected(article));
        }

        setOpenModalProduct(true);
        setTypeModalProduct(type);
    };

    const onSubmit = handleSubmit(data => {
        if (data.search === '') {
            return dispatch(setArticulosBaseListBySearch(articulosListCopy));
        }

        const dataFiltered = articulosListCopy.filter((item: any) =>
            item?.codigoBarras.includes(data.search),
        );
        dispatch(setArticulosBaseListBySearch(dataFiltered));
    });

    useEffect(() => {
        if (!state) {
            // setOpenModalState(false);
            setOpenModalProduct(false);
        }
    }, [state]);

    useEffect(() => {
        articulosList.length === 0 && dispatch(getArticulosBaseList());
        setArticulosListCopy(articulosList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articuloChange]);

    return (
        <section>
            <div>
                <PageHeader title="Articulos">
                    <OptionsHeader newArticleModal={() => openModalProductType('new', null)} />
                </PageHeader>
            </div>

            {openModalProduct && (
                <NewArticleModal value={openModalProduct} type={typeModalProduct} article={null} />
            )}

            <form
                onSubmit={onSubmit}
                className="flex justify-center bg-gray-800 mx-auto w-3/6 mt-5 py-5 rounded-lg">
                <TextInput
                    inputName={'search'}
                    inputType={'text'}
                    placeholder={'Codigo de articulo'}
                    keyPressEvent={() => {}}
                    registerForm={{ ...register('search', { required: false }) }}
                    customContainerClassName="text-center text-black mr-6 mb-2"
                />
                <ActionButton
                    type="submit"
                    action={() => setSearchChange(searchChange + 1)}
                    title={'Search'}
                    customClass="bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm font-medium mt-2 mb-2"
                />
            </form>
            <div>
                <div className="mt-6 overflow-x-auto">
                    <TableForArticulosBaseList
                        data={isArticulosListLoading ? [] : articulosList}
                        openStateModal={() => {}} // openModalStateType
                        openProductModal={openModalProductType}
                    />
                </div>

                <PaginationSection
                    current={current}
                    changeCurrent={onChangeCurrent}
                    pageSize={10}
                    totalElements={articulosList.length}
                />
            </div>
        </section>
    );
};
