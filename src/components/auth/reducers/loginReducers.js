export const loginReducer = (state = {}, action) => {
    console.log ("track loginReducers.js")
    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                user: action.payload,
            };
        case 'logout':
            return {
                isAuth: false,
            }
        default:
            return state;
    }

}