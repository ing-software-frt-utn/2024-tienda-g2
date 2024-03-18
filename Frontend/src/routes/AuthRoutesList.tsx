import { LoginScreen } from '../pages/Auth/LoginScreen';
import { RegisterScreen } from '../pages/Auth/RegisterScreen';

import { AppRoutesInterface } from '../interfaces/Routes';

export const AuthRoutesList: AppRoutesInterface[] = [
    {
        path: '/login',
        component: <LoginScreen />,
    },
    {
        path: '/register',
        component: <RegisterScreen />,
    },
];
