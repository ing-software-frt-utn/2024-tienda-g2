/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react';
import { DefaultValues, useForm } from 'react-hook-form';

interface Props<T extends Record<string, any>> {
    initialValues: T;
}

type SelectedOptionType = {
    value: string | number;
    label: string;
};

export const useReactHookForm = <T extends Record<string, any>>({ initialValues }: Props<T>) => {
    const {
        register,
        handleSubmit: useFormSubmit,
        setValue,
        control,
        getValues,
    } = useForm<T>({
        defaultValues: initialValues as DefaultValues<T>,
    });

    const [selectValues, setSelectValues] = useState<Record<string, SelectedOptionType>>({});

    const handleChangeSelect = useCallback(
        (name: string, selectedOption: SelectedOptionType) => {
            setSelectValues(prevValues => ({
                ...prevValues,
                [name]: selectedOption,
            }));

            setValue(name as any, selectedOption.value as any);
        },
        [setValue],
    );

    const handleSubmit = useCallback(
        (onSubmit: (data: T) => void) =>
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useFormSubmit(data => {
                const dataWithSelectValues = Object.entries(selectValues).reduce(
                    (acc, [key, value]) => {
                        (acc as Record<string, any>)[key as string] = value.value;
                        return acc;
                    },
                    { ...data },
                ) as T;

                console.log('Data Final: ', dataWithSelectValues);
                onSubmit(dataWithSelectValues);
            }),
        [selectValues, useFormSubmit],
    );

    return {
        register,
        handleSubmit,
        setValue,
        control,
        getValues,
        handleChangeSelect,
        selectValues,
    };
};
