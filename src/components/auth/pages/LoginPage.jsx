import { useState } from "react";

export const LoginPage = ({ handlerLogin }) => {

//    console.log ("LoginPage")

    //handlerLogin ({username: 'admin', password: '12345'})

    const [values, setValues] = useState({
        user: "",
        password: "",
    });

    const onSubmit = (event) => {
        event.preventDefault (); //esto es para que no se recargue la pagian cuandose pulsa el boton

        //aca implementamos el login
        //handlerLogin ({username, password});

        const { target } = event;
        //console.log ("target: ", target)

        console.log ("values: ", values);
        handlerLogin ({username: values.user, password: values.password})

        //reiniciar los datos del formulario
        //setLoginForm (initialLoginForm);
    }

    const handleChange = ({target}) => {
        /*  target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual */
        const { name, value } = target;
        setValues ({
            ...values,
            [name]: value,
        })
    }

    return (
        <>
            Soy la login page
            <form onSubmit={ onSubmit }>
                <div className="modal-footer">
                <label htmlFor="user">Username</label>
                <input
                    id="user"
                    name="user"
                    type="text"
                    value={values.user}
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