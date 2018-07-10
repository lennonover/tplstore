let actions = {
    loginuser : (payload) => ({
        type: 'LOGIN_USER', 
        payload
    }),
    loginuserSuccess : (token) => ({
        type: 'LOGIN_USER_SUCCESS', 
        payload: token
    }),
    loginuserFailure : (error) => ({
        type: 'LOGIN_USER_FAILURE', 
        payload: error
    })
} 
export default actions;