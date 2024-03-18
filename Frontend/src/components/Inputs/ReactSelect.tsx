import Select from 'react-select';

const customStyles = {
    control: (provided: any, _state: any) => ({
        ...provided,
        borderRadius: 5,
    }),
    option: (provided: any, _state: { isSelected: any }) => ({
        ...provided,
        // padding: 12,
        minHeight: '30px',
        height: '30px',
        color: _state.isSelected ? 'white' : 'black', // Añade esta línea para cambiar el color del texto a negro
        textAlign: 'center',
    }),
    valueContainer: (provided: any, _state: any) => ({
        ...provided,
        height: '30px',
        // padding: '0 6px',
    }),
    input: (provided: any, _state: any) => ({
        ...provided,
        margin: '0px',
    }),
    indicatorSeparator: (_state: any) => ({
        display: 'none',
    }),
    indicatorsContainer: (provided: any, _state: any) => ({
        ...provided,
        height: '30px',
    }),
};

interface Props {
    onChange: (value: { value: string | number; label: string } | null) => void;
    options: { value: string | number; label: string }[];
    value: { value: string | number; label: string } | null;
    isSearchable: boolean;
    customInputContainer?: string;
    inputTitle?: string;
}

export const ReactSelect = ({
    onChange,
    options,
    value,
    isSearchable,
    customInputContainer,
    inputTitle,
}: Props) => {
    return (
        <div className={`${customInputContainer}`}>
            {inputTitle && (
                <p className="text-lg" style={{ marginBottom: '7px' }}>
                    {inputTitle}
                </p>
            )}
            <Select
                styles={customStyles}
                options={options}
                value={value}
                onChange={onChange}
                isSearchable={isSearchable ?? false} // Esta prop es para permitir buscar
                placeholder={'Seleccione...'}
            />
        </div>
    );
};
