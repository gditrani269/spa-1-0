export const LoginPage = ({ handlerLogin }) => {
    console.log ("LoginPage")
    //handlerLogin ({username: 'admin', password: '12345'})

    const onSubmit = (event) => {
        event.preventDefault (); //esto es para que no se recargue la pagian cuandose pulsa el boton
     /*   if (!username || !password) {
            Swal.fire ('Error de validacion', 'Username y ppasword requeridos', 'error');
        }*/
        //aca implementamos el login
        //handlerLogin ({username, password});
        handlerLogin ({username: 'admin', password: '12345'})
        //reiniciar los datos del formulario
        //setLoginForm (initialLoginForm);
    }

    return (
        <>
            Soy la login page
            <form onSubmit={ onSubmit }>
                <div className="modal-footer">
                    <button  className="btn btn-primary"
                        type="submit">
                        Login
                    </button>
                </div>
            </form>
        </>

    )
}