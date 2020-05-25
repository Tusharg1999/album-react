
import loginTypes from './types';
const initialState = {
    isLoading: false,
    message: null
}

const loginReducer = function (state = initialState, actions) {
    switch (actions.type) {
        case loginTypes.LOGIN_START:
            return { ...state, isLoading: true, message: null }
        case loginTypes.LOGIN_SUCCESS:
            return { ...state, isLoading: false, message: actions.payload }
        case loginTypes.LOGIN_FAIL:
            return { ...state, isLoading: false, message: actions.payload }
        default:
            return state
    }
}

export default loginReducer;