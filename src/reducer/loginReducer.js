import Immutable from 'immutable';
const initialState = Immutable.fromJS({
    token:null,
    error:null,
    user:null
})
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return state.set('user',action.payload);
        case "LOGIN_USER_SUCCESS":
            let nextstate = state.set('token',action.payload)
            return nextstate;
        case "LOGIN_USER_ERROR":
            return state.set('error',action.payload);
        default:
            return state;
    }
}