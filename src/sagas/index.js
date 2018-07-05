import {takeLatest} from 'redux-saga'
import { } from 'redux-saga/effects'
import {loginuserAsync} from './user'

function* rootSaga() {
    // 监听登录 action
    yield* takeLatest('LOGIN_USER',loginuserAsync)

}
export default rootSaga;