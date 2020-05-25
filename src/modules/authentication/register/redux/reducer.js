const { default: registrationTypes } = require("./types")

const initialState = {
    isLoading: false,
    errorMessage: null
}

const registerReducer = function (state = initialState, actions) {
    switch (actions.type) {
        case registrationTypes.SIGN_UP_START:
            return { ...state, isLoading: true, errorMessage: null }
        case registrationTypes.SIGN_UP_SUCCESS:
            return { ...state, isLoading: false, errorMessage: null }
        case registrationTypes.SIGN_UP_FAIL:
            return { ...state, isLoading: false, errorMessage: actions.payload }
        default:
            return state
    }
}

export default registerReducer;