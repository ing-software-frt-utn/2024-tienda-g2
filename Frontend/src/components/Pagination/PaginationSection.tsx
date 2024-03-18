import Pagination from 'rc-pagination';
import './paginationStyles.css'

interface PaginationSectionProps {
    current: number;
    pageSize: number;
    totalElements: number;
    changeCurrent: (value: number) => void;
}

export const PaginationSection = ({ current, pageSize, totalElements, changeCurrent }: PaginationSectionProps) => {
    return (
        <div className='mt-10'>
            <Pagination
                current={current} pageSize={pageSize} total={totalElements}
                // locale={'en_US'}
                onChange={(value) => { changeCurrent(value); }}
                style={{ display: 'flex', justifyContent: 'center' }}
            />
        </div>

    )
}
