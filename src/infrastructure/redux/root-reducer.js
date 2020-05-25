import { combineReducers } from 'redux';

import { userReducer } from '../../modules/shared/redux/reducer';
import registerReducer from '../../modules/authentication/register/redux/reducer';

const rootReducer = combineReducers({
    user: userReducer,
    register: registerReducer
})

export default rootReducer 