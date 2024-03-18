import React from 'react';

// import { ToastToken } from '../utils/ToastSweetAlert';

interface Props {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
    // const navigate = useNavigate()
    // const { authenticated } = useSelector(state => state.auth);

    // useEffect(() => {
    //     if (authenticated !== true) {
    //         navigate('/');
    //         ToastToken.fire({ icon: 'warning', title: 'Error en la Sesion. Vuelva a Iniciar Sesion' });
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return <>{children}</>;
};
