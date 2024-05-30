const baseURL = 'http://localhost:8080'

function sendRequest(path, method, body, cb) {
    const request = new XMLHttpRequest();
    request.open(method, baseURL + path, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                cb(request.response, request.status);
            } else {
                cb(undefined, request.status);
                console.log('error while request on path ' + path, request)
            }
        }
    }
    request.send(JSON.stringify(body));
}
