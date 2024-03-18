import { ToastNotification } from '../../../components/Notifications/ToastNotification';
import { Article } from '../../../interfaces/article';
// import { AuthTokenVerification } from '../../../utils/AuthTokenVerification';
// import { renewToken } from "../auth/thunks";
// import { ResponseStatus } from '../../api/ApiResponse';
import { AppAPI } from '../../api/AppAPI';
import {
    setArticulosData,
    startLoadingArticulosProcess,
    startArticulosChangeProcess,
    setArticulosSelectedData,
} from './articulosSlice';

export const getArticulosBaseList = () => {
    return async (dispatch: any, _getState: any) => {
        // const { sessionData } = getState().auth;
        // const token = sessionData.token;

        dispatch(startLoadingArticulosProcess());

        try {
            const { data: responseData, status } = await AppAPI().get('/Articulo');

            if (status === 200) {
                dispatch(
                    setArticulosData({
                        articulosList: responseData,
                    }),
                );

                dispatch(startArticulosChangeProcess());

                // dispatch(renewToken());
            }
        } catch (error) {
            console.log(error);
            // AuthTokenVerification(error, nav, dispatch);
        }
    };
};

export const setArticulosBaseListBySearch = (data: any[]) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingArticulosProcess());

        dispatch(
            setArticulosData({
                articulosList: data,
            }),
        );
    };
};

export const setArticuloSelected = (data: Article) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(
            setArticulosSelectedData({
                articuloSelected: data,
            }),
        );
    };
};

export const createArticle = (body: Article, closeModal: any) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingArticulosProcess());

        try {
            const { status } = await AppAPI().post('/Articulo', body);

            if (status === 200) {
                ToastNotification.fire({ icon: 'success', title: 'Articulo Creado con Exito' });
            }

            closeModal();
            // dispatch(startArticulosChangeProcess());
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error: any) {
            console.log(error);
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            // AuthTokenVerification(error, nav, dispatch);
        }
    };
};

export const updateArticle = (body: Article, closeModal: any) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingArticulosProcess());

        try {
            const { status } = await AppAPI().put('/Articulo', body);

            if (status === 200) {
                ToastNotification.fire({ icon: 'success', title: 'Articulo Editado con Exito' });
            }

            closeModal();

            setTimeout(() => {
                window.location.reload();
            }, 1000);

            // dispatch(startArticulosChangeProcess());
        } catch (error: any) {
            console.log(error);
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            // AuthTokenVerification(error, nav, dispatch);
        }
    };
};
