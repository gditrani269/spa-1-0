import { useReducer} from 'react';
import { loginReducer } from '../reducers/loginReducers';


const initialLogin = JSON.parse (sessionStorage.getItem ('login')) || {
    isAuth: false,
    user: undefined,
    varios: '',
}

export const useAuth = ()  => {
    const [login, dispatch] = useReducer (loginReducer, initialLogin);

    console.log ("useAuth: login ", login)
    const handlerLogin = ({username, password}) => {
        console.log ("handlerLogin")
        const isLogin = true; //loginUser ({username, password});
        if  (isLogin) {
            console.log ("useAuth -> handlerLogin = true")
            const user = { username: 'admin-', varios: 'campo'}
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