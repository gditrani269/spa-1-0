
import { useAuth } from "./components/auth/hooks/useAuth";
import { LoginPage } from "./components/auth/pages/LoginPage";
import { LogoutPage } from "./components/auth/pages/LogoutPage";

export const Home = () => {

    const { login, handlerLogin, handlerLogout } = useAuth ();

    return (
        <>
            mi home
            {
            login.isAuth
                ? (
                    <>
                        Esta logeado
                        <LogoutPage handlerLogout={ handlerLogout }/>
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