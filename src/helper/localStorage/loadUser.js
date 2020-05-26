import { debugLog } from '../../utils/logger'
function loadUser() {
    try {
        const token = localStorage.getItem("token");
        if (token !== null) {
            return token
        }
        else return null;
    } catch (e) {
        debugLog(e)
        return null;
    }
}
export default loadUser;