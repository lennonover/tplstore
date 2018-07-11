import Immutable from 'immutable';
const initialState = Immutable.fromJS({
    token:null,
    error:null,
    username:null,
    password:null
})
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return state.merge({
                'username':action.payload.username,
                'password':action.payload.password
            });
        case "LOGIN_USER_SUCCESS":
            return state.merge({
                'error':"",
                'token':action.payload
            });
        case "LOGIN_USER_FAILURE":
            return state.set('error',action.payload);
        default:
            return state;
    }
}