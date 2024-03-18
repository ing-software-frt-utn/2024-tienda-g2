import { ToastNotification } from '../../../components/Notifications/ToastNotification';
import { ResponseStatus } from '../../api/ApiResponse';
import { AuthValidationAPI, authApi } from '../../api/AuthAPI';
import { startLoadingAuthProcess, setAuthData, logout } from './authSlice';
// import { goToDashboard } from '../../../helpers/redirectTo';

export const getAuthentication = (userData: any, navigate: any) => {
    return async (dispatch: any) => {
        dispatch(startLoadingAuthProcess());

        try {
            const { data: resp } = await authApi.post(`/login`, userData);

            dispatch(
                setAuthData({
                    sessionData: {
                        user: resp.data.user,
                        token: resp.data.token,
                    },
                }),
            );

            ToastNotification.fire({ icon: 'success', title: 'Login Exitoso' });
            // setTimeout(() => { goToDashboard('/app/dashboard') }, 1000);
            setTimeout(() => {
                navigate('/app/dashboard');
            }, 1000);
        } catch (error: any) {
            console.log(error);

            ToastNotification.fire({
                icon: 'error',
                title: `Fallo el Login: ${error.response.data.data.error}`,
            });
        }
    };
};

export const removeAuthentication = () => {
    return async (dispatch: any) => {
        dispatch(logout());
    };
};

// export const changePassword = (userData, { sucessCallBack }) => {
//     return async dispatch => {
//         dispatch(startLoadingAuthProcess());

//         try {
//             await authApi.put(`/change-password`, userData);
//             ToastNotification.fire({ icon: 'success', title: 'Password cambio con Exito' });
//             sucessCallBack();
//         } catch (error) {
//             if (
//                 error.response.data.error === 'No puedes cambiar la contraseña actual por la misma'
//             ) {
//                 ToastNotification.fire({ icon: 'error', title: error.response.data.error });
//             } else {
//                 ToastNotification.fire({ icon: 'error', title: 'Fallo el cambio de Password' });
//             }
//         }
//     };
// };

// export const renewToken = () => {
//     return async (dispatch, getState) => {
//         const { sessionData } = getState().auth;
//         const persistance = JSON.parse(localStorage.getItem('persist:auth'));

//         try {
//             const { data: resp } = await authApi.post('/');

//             dispatch(
//                 setAuthData({
//                     sessionData: {
//                         user: sessionData.user,
//                         token: resp.data.token,
//                     },
//                 }),
//             );

//             const persistanceLS = {
//                 authenticated: persistance.authenticated,
//                 isLoading: persistance.isLoading,
//                 sessionData: resp.data.token,
//                 _persist: persistance._persist,
//             };

//             ToastNotification.fire({ icon: 'success', title: 'Token Actualizado' });
//             localStorage.setItem('persist:auth', persistanceLS);
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

// export const checkSessionValidation = (token, { sucessCallBack, failureCallback }) => {
//     return async dispatch => {
//         dispatch(startLoadingAuthProcess());

//         try {
//             const { data: resp } = await AuthValidationAPI(token).get(`/renew`);
//             if (resp.status === ResponseStatus.OK) {
//                 ToastNotification.fire({ icon: 'success', title: 'Bienvenido Nuevamente' });
//                 sucessCallBack();
//             }
//         } catch (error) {
//             if (error.response.data.status === ResponseStatus.FAILED) {
//                 ToastNotification.fire({ icon: 'error', title: 'Sesion Caducada' });
//                 dispatch(setAuthData({ sessionData: null, authenticated: false }));
//                 failureCallback();
//             }
//         }
//     };
// };
