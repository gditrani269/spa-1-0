export const loginReducer = (state = {}, action) => {
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