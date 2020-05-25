import { combineReducers } from 'redux';

import { userReducer } from '../../modules/shared/redux/reducer';
import registerReducer from '../../modules/authentication/register/redux/reducer';
import loginReducer from '../../modules/authentication/login/redux/reducer';

const rootReducer = combineReducers({
    user: userReducer,
    register: registerReducer,
    login: loginReducer
})

export default rootReducer 