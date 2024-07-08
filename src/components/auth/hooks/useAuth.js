import { useReducer} from 'react';
import { loginReducer } from '../reducers/loginReducers';

import Swal from 'sweetalert2'

/*
    inicializa variable:
    login

    inicializa funciones
    handlerLogin,
    handlerLogout,

*/

const initialStocks = [
    {
        "id": 1,
        username: 34234,
        email: 12345,

        accion: 'MOLA',
        valor: '22000',
        Cantidad: '441',
        Saldo_pesos: '8888888',
        Saldo_dolares: '6700'
    },
    {
        "id": 2,
        username: 678768,
        email: 67876876,

        accion: 'MSFT',
        valor: '21000',
        Cantidad: '500',
        Saldo_pesos: '12000000',
        Saldo_dolares: '9000'
    },
    {
        "id": 3,
        username: 678768,
        email: 67876876,

        accion: 'BMA',
        valor: '7400',
        Cantidad: '2050',
        Saldo_pesos: '16000000',
        Saldo_dolares: '11000'
    },
    {
        "id": 4,
        username: 678768,
        email: 67876876,

        accion: 'BMA',
        valor: '7400',
        Cantidad: '2050',
        Saldo_pesos: '16000000',
        Saldo_dolares: '11000'
    },
    {
        "id": 5,
        username: 678768,
        email: 67876876,

        accion: 'BMA',
        valor: '7400',
        Cantidad: '2050',
        Saldo_pesos: '16000000',
        Saldo_dolares: '11000'
    },
    {
        "id": 6,
        username: 678768,
        email: 67876876,

        accion: 'GGAL',
        valor: '7400',
        Cantidad: '2050',
        Saldo_pesos: '16000000',
        Saldo_dolares: '11000'
    }
];


const initialLogin = JSON.parse (sessionStorage.getItem ('login')) || {
    isAuth: false,
    user: undefined,
}

export const useAuth = ()  => {
    const [login, dispatch] = useReducer (loginReducer, initialLogin);


    console.log ("useAuth: login ", login)
    const handlerLogin = ({username, password}) => {
        console.log ("handlerLogin")
        console.log ("user: ", username , " pass: ", password);
        if ((username === 'admin' && password === '12345') || (username === 'ger' && password === 'ger')) {
            const isLogin = true; //loginUser ({username, password});

            if  (isLogin) {
                const date = new Date();
                const showTime = date.getHours() 
                + ':' + date.getMinutes() 
                + ":" + date.getSeconds();
                console.log ("useAuth -> handlerLogin = true")
                const user = { user: username, varios: showTime}
                dispatch ({
                    type: 'login',
                    payload: user,  
                });

                sessionStorage.setItem ('login', JSON.stringify ({
                    isAuth: true,
                    user: user,
                   // varios: showTime,
                }));
            }

        } else {
            Swal.fire ('Error login', 'Username y/o ppasword invalidos', 'error');
        }
    }

    const handlerLogout = () => {
        dispatch ({
            type: 'logout',
        });    
        sessionStorage.removeItem ('login');
        console.log ("useAuth -> handlerLogout")
    }


    const handlerSession = () => {
        console.log ("handlerSession")

        console.log (sessionStorage.getItem ('login'));

        const userSelected = [JSON.parse (sessionStorage.getItem ('login')).user]
        console.log ("SOLO USER ", userSelected)
        userSelected.map (({user, varios}) => (
            sasa (user, varios)
  
        ))
        console.log ("SOLO USER ", sessionStorage.getItem (0))
        /*const user = { username: sessionStorage.getItem ('login').user, varios: showTime}
        dispatch ({
            type: 'login',
            payload: user,  
        });

        sessionStorage.setItem ('login', JSON.stringify ({
            isAuth: true,
            user: user,
           // varios: showTime,
        }));*/
    
        console.log (sessionStorage.getItem ('login'));
        console.log ("TERMINA handlerSession")
    }

    function sasa (user, varios) {
        console.log ("sasa ", user , " ", varios)
        const date = new Date();
        const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
   /*     const user2 = { user: user, varios: showTime}
        dispatch ({
            type: 'login',
            payload: user2,  
        });*/
        const userF = { user: user, varios: initialStocks}
        sessionStorage.setItem ('login', JSON.stringify ({
            isAuth: true,
            user: userF,
            
        }))
    }

    return {
        login,
        handlerLogin,
        handlerLogout,
        handlerSession,
    }
}