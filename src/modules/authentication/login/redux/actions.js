import loginTypes from './types'
import axiosInstance from '../../../../config/axios/index';
import setUserAction from '../../../shared/redux/actions';
import { debugLog } from '../../../../utils/logger/index'
import setUser from '../../../../helper/localStorage/setUser';

function userLoginStart() {
    return {
        type: loginTypes.LOGIN_START
    }
} function userLoginSuccess(message) {
    return {
        type: loginTypes.LOGIN_SUCCESS,
        payload: message
    }
} function userLoginFail(message) {
    return {
        type: loginTypes.LOGIN_FAIL,
        payload: message
    }
}

function userLoginStartAsync(credentials, history) {
    return async function (dispatch) {
        dispatch(userLoginStart());
        try {
            const response = await axiosInstance.post("/login", { ...credentials })
            debugLog(response)
            dispatch(setUserAction(response.data.token))
            setUser(response.data.token)
            dispatch(userLoginSuccess(response.data.msg))
            history.push('/');
        } catch (e) {
            dispatch(userLoginFail(e))
        }
    }
}

export default userLoginStartAsync;