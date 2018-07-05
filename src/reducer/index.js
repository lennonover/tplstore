
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import marketReducer from './marketReducer';


const rootReducer = combineReducers({
    loginReducer,
    marketReducer
});

export default rootReducer;