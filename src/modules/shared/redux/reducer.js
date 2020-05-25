import userActionTypes from "./types"

const initialState = {
    currentUser: null
}

const userReducer = function (state = initialState, actions) {
    switch (actions.type) {
        case userActionTypes.SET_CURRENT_USER:
            return { ...state, currentUser: actions.payload }
        default:
            return state
    }
}

export { userReducer }