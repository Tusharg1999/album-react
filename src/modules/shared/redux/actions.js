import userActionTypes from './types';


function setUserAction(payload) {
    localStorage.setItem("token", payload)
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload: payload
    }
}
export default setUserAction;