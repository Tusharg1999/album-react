import userActionTypes from './types';


function setUserAction(payload) {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload: payload
    }
}
export default setUserAction;