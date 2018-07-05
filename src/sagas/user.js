import {select, put, call} from 'redux-saga/effects'
import {getUser} from './selectors'
import action from '../action/action'
import ServiceApi from '../api/api'

export function* loginuserAsync(){
    const auth = yield select(getUser);
    const user = "admin";

    const json = yield call(ServiceApi.login.bind(this,user),'login')

    if(json.code === 200){
        yield put(action.loginuserSuccess(json.token))
    }else{
        yield put(action.loginuserFailure(json.error))
    }

}