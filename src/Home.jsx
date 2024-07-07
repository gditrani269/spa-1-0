
import { useAuth } from "./components/auth/hooks/useAuth";
import { LoginPage } from "./components/auth/pages/LoginPage";
import { LogoutPage } from "./components/auth/pages/LogoutPage";

export const Home = () => {

    console.log ("Home.jsx Amaneciendo");
    const { login, handlerLogin, handlerLogout, handlerSession } = useAuth ();
    console.log ("Home.jsx login: ", login);

    return (
        <>
            mi home
            {
            login.isAuth
                ? (
                    <>
                        Esta logeado
                        <LogoutPage handlerLogout={ handlerLogout} handlerSession={handlerSession}  />
                    </>
                )
                : <>No esta logeado
                    <LoginPage handlerLogin={ handlerLogin }/>
                </>
            }
            {/*<UsersPage />*/}

        </>
    )
}