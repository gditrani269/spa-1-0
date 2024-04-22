import { useReducer} from 'react';
import { loginReducer } from '../reducers/loginReducers';
import { loginUser } from '../../../auth/services/authService';
import Swal from 'sweetalert2';

const initialLogin = JSON.parse (sessionStorage.getItem ('login')) || {
    isAuth: false,
    user: undefined,
}

export const useAuth = ()  => {
    const [login, dispatch] = useReducer (loginReducer, initialLogin);

    const handlerLogin = ({user, password}) => {
        const isLogin = loginUser ({user, password});
        if  (isLogin) {
            //const user = { username: user, varios: 'campo'}
            dispatch ({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem ('login', JSON.stringify ({
                isAuth: true,
                user: user,
            }));
        } else {
            Swal.fire ('Error login', 'Username y/o ppasword invalidos', 'error');
        }
    }

    const handlerLogout = () => {
        dispatch ({
            type: 'logout',
        });    
        sessionStorage.removeItem ('login');
    }

    return {
        login,
        handlerLogin,
        handlerLogout,
    }
}