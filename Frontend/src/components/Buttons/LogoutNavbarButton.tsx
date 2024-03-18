import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
// import { useDispatch } from 'react-redux';
// import { removeAuthentication } from '../../redux/slices/auth/thunks';
// import { useNavigate } from 'react-router-dom';

export const LogoutNavbarButton = () => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const logout = () => {
    //     localStorage.removeItem("persist:auth");
    //     dispatch(removeAuthentication());
    //     navigate('/');
    //     window.location.reload();
    // }

    return (
        <button className="-m-3 p-3 flex items-start rounded-lg hover:bg-pink-900 text-start">
            <ArrowDownCircleIcon className="flex-shrink-0 h-6 w-6 text-indigo-300 me-3" />
            <div className="ml-4">
                <p className="text-base font-bold text-white ">Cerrar Sesion</p>
                <p className="mt-1 text-sm text-gray-200 ">Guarda los ultimos datos de la aplicacion y cierra sesion de manera segura</p>
            </div>
        </button>
    )
}
