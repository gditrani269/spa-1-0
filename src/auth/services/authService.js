export const loginUser = (userlogin) => {

        let vRta = false;
        switch (userlogin.user) {
            case "admin":
                vRta = true;
                break;

            case "ger":
                vRta = true;
                break;

            case "sasa":
                vRta = true;
                break;

            default:
                vRta = false;
                break;
        };
       
       return vRta;
    
    //(userlogin.email === 'admin' && userlogin.password === '12345')? true : false;
}