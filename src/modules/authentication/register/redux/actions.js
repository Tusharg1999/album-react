import registrationTypes from './types'
import axiosInstance from '../../../../config/axios/index';

function userRegistrationStart() {
    return {
        type: registrationTypes.SIGN_UP_START
    }
} function userRegistrationSuccess() {
    return {
        type: registrationTypes.SIGN_UP_SUCCESS
    }
} function userRegistrationFail(message) {
    return {
        type: registrationTypes.SIGN_UP_FAIL,
        payload: message
    }
}

function userRegistrationStartAsync(credentials) {
    return async function (dispatch) {
        dispatch(userRegistrationStart());
        try {
            const response = await axiosInstance.post("/register", { ...credentials })
            console.log(response)
            dispatch(userRegistrationSuccess())
        } catch (e) {
            dispatch(userRegistrationFail(e))
        }
    }
}

export default userRegistrationStartAsync;