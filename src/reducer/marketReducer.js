import { fromJS } from 'immutable';
const initialState = {
    modelResult:[
        
    ]
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_MARKET":
            return state;
        default:
            return state;
    }
}