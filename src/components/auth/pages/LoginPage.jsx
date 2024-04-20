import { useState } from "react";

export const LoginPage = ({ handlerLogin }) => {
    console.log ("LoginPage")
    //handlerLogin ({username: 'admin', password: '12345'})

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [inData, setInData ] = useState ({
        email: "",
        password: "",
    });

    const onSubmit = (event) => {
        event.preventDefault (); //esto es para que no se recargue la pagian cuandose pulsa el boton
     /*   if (!username || !password) {
            Swal.fire ('Error de validacion', 'Username y ppasword requeridos', 'error');
        }*/
        //aca implementamos el login
        //handlerLogin ({username, password});

        /*
          Previene el comportamiento default de los
          formularios el cual recarga el sitio
        */
        event.preventDefault();
        console.log ("ca ta");
        const { target } = event;
        console.log ("target: ", target)
        const { name, value } = target;
        const newValues = {
            ...values,
            [name]: value,
        };
        setInData(newValues);
        console.log ("values: ", values);
//        handlerLogin ({username: 'admin', password: '12345'})

        //reiniciar los datos del formulario
        //setLoginForm (initialLoginForm);
    }

    const handleChange = ({target}) => {
        /*
          target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual
        */
        console.log (target.value)
        const { name, value } = target;
        setValues ({
            ...values,
            [name]: value,
        })
        console.log ("values: ", values);
    }

    return (
        <>
            Soy la login page
            <form onSubmit={ onSubmit }>
                <div className="modal-footer">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                />                    
                <button  className="btn btn-primary"
                    type="submit">
                    Login
                </button>
                </div>
            </form>
        </>

    )
}