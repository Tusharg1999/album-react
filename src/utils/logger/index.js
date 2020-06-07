import { isDevelopment } from '../../config'

function debugLog(msg) {
    if (isDevelopment()) {
        console.log(msg);
    }
}
function errorLog(msg) {
    if (isDevelopment()) {
        console.error(msg);
    }
}

export { debugLog, errorLog }