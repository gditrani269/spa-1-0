export const LogoutPage = ({ handlerLogout }) => {

    const onSubmit = (event) => {
        event.preventDefault (); //esto es para que no se recargue la pagian cuandose pulsa el boton
     /*   if (!username || !password) {
            Swal.fire ('Error de validacion', 'Username y ppasword requeridos', 'error');
        }*/
        //aca implementamos el login
        //handlerLogin ({username, password});
        handlerLogout ();
        //reiniciar los datos del formulario
        //setLoginForm (initialLoginForm);
    }

    return (
        <>
                        <form onSubmit={ onSubmit }>
                            <div className="modal-footer">
                                <button  className="btn btn-primary"
                                    type="submit">
                                    Logoutss
                                </button>
                            </div>
                        </form>        
        </>
    )
}