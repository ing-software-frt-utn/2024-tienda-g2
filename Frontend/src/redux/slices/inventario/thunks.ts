import { ToastNotification } from '../../../components/Notifications/ToastNotification';
import { AppAPI } from '../../api/AppAPI';
import {
    setInventarioData,
    startInventarioChangeProcess,
    startLoadingInventarioProcess,
    setComplementosData,
} from './inventarioSlice';

interface ArticleParams {
    idSucursal: number;
    codigoBarra: string;
    idTipoTalle?: string | null;
    idTalle?: string | null;
    idColor?: string | null;
}

const getInventarioListUrl = (params: ArticleParams) => {
    let url = `/Inventario/getInventarioByParams?idSucursal=${params.idSucursal}&codigoBarra=${params.codigoBarra}`;

    if (params.idTipoTalle && params.idTalle && params.idColor) {
        url += `&idTipoTalle=${params.idTipoTalle}&idTalle=${params.idTalle}&idColor=${params.idColor}`;
    } else if (params.idTipoTalle && params.idTalle) {
        url += `&idTipoTalle=${params.idTipoTalle}&idTalle=${params.idTalle}`;
    } else if (params.idColor && !params.idTalle && !params.idTipoTalle) {
        url += `&idColor=${params.idColor}`;
    }

    return url;
};

export const getInventarioList = (params: ArticleParams) => {
    return async (dispatch: any, _getState: any) => {
        // const { sessionData } = getState().auth;
        // const token = sessionData.token;

        dispatch(startLoadingInventarioProcess());

        const url = getInventarioListUrl(params);

        console.log('URL: ', url);

        try {
            const { data: responseData, status } = await AppAPI().get(url);
            if (status === 200) {
                dispatch(
                    setInventarioData({
                        inventarioList: responseData,
                    }),
                );

                dispatch(startInventarioChangeProcess());

                // dispatch(renewToken());
            }
        } catch (error: any) {
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            console.log('ERROR:', error);
        }
    };
};

export const getComplementosList = () => {
    return async (dispatch: any, _getState: any) => {
        try {
            const { data: responseTallesData, status: StatusTalles } = await AppAPI().get('/Talle');

            const { data: responseTipoTallesData, status: StatusTipoTalles } =
                await AppAPI().get('/TipoTalle');

            const { data: responseColorData, status: StatusColor } = await AppAPI().get('/Color');

            if (StatusTalles === 200 && StatusTipoTalles === 200 && StatusColor === 200) {
                dispatch(
                    setComplementosData({
                        complementosList: {
                            tipoTallesList: responseTipoTallesData,
                            tallesList: responseTallesData,
                            colorList: responseColorData,
                        },
                    }),
                );

                // dispatch(renewToken());
            }
        } catch (error) {
            console.log(error);
            // AuthTokenVerification(error, nav, dispatch);
        }
    };
};
