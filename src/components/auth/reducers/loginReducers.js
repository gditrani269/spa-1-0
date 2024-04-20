export const loginReducer = (state = {}, action) => {
    console.log ("track loginReducers.js")
    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                user: action.payload.username,
                varios: action.payload.varios,
            };
        case 'logout':
            return {
                isAuth: false,
            }
        default:
            return state;
    }

}