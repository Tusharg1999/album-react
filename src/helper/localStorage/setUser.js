import { debugLog } from '../../utils/logger'
function setUser(newToken) {
    try {
        localStorage.setItem("token", newToken);
    } catch (e) {
        debugLog(e)
    }
}
export default setUser;