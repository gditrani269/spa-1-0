export const LogoutPage = ({ handlerLogout, handlerSession }) => {

    const onSubmit = (event) => {
        event.preventDefault (); //esto es para que no se recargue la pagian cuandose pulsa el boton
        handlerLogout ();
        //reiniciar los datos del formulario
        //setLoginForm (initialLoginForm);
    }

    //Funcion que agrega cosas a la sesion
    const onSession = (event) => {
        event.preventDefault (); //esto es para que no se recargue la pagian cuandose pulsa el boton
        console.log ("onSession");
        handlerSession ();
        //reiniciar los datos del formulario
        //setLoginForm (initialLoginForm);
    }
    return (
        <>
            <form onSubmit={ onSubmit }>
                <div className="modal-footer">
                    <button  className="btn btn-primary"
                        type="submit">
                        Logout
                    </button>
                </div>
            </form>        
            <form onSubmit={ onSession }>
                <div className="modal-footer">
                    <button  className="btn btn-primary"
                        type="submit">
                        onSession
                    </button>
                </div>
            </form>     
        </>
    )
}