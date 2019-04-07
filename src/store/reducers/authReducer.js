const iniState = {
    authError: null
};

const authReducer = (state = iniState, action) => {

    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('logout succesfully')
            return state;
            
        case 'LOGOUT_ERROR':
            console.log('logout error', action.error);
            return state;

        default:
            return state;
    }
}

export default authReducer;