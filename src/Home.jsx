
import { useAuth } from "./components/auth/hooks/useAuth";
import { LoginPage } from "./components/auth/pages/LoginPage";
import { LogoutPage } from "./components/auth/pages/LogoutPage";

export const Home = () => {

//    console.log ("Home.jsx Amaneciendo");
    const { login, handlerLogin, handlerLogout, handlerSession } = useAuth ();
//    console.log ("Home.jsx login: ", login);

    return (
        <>
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="container my-4">
                    <h3>mi home</h3>
                    {
                    login.isAuth
                        ? (
                            <div className="container my-4">
                                <h4>Esta logeado</h4>
                                <LogoutPage handlerLogout={ handlerLogout} handlerSession={handlerSession}  />
                            </div>
                        )
                        : 
                            <div className="container my-4">
                                <h4>No esta logeado</h4>
                                <LoginPage handlerLogin={ handlerLogin }/>
                            </div>
                    }
                    {/*<UsersPage />*/}
                </div>
            </div>
        </>
    )
}