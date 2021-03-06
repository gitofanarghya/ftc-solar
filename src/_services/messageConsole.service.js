export const messageConsoleService = {
    getMessages
};
function getMessages() {
    const requestOptions = {
        method: "GET",
        body: null
    };

    return fetch(`https://73faa199-85dc-44fa-b440-3d93314c9dfb.mock.pstmn.io/minLog`, requestOptions)
        .then(handleResponse)
}
function handleResponse(response) {
    return response.json().then(json => { console.log(JSON.stringify(json))
        if (!response.ok) {
            if (response.status === 403) {
                console.log("403")
                localStorage.removeItem('user')
                window.location.reload(true);
            }

            const error = (json && json.message) || response.statusText;
            return Promise.reject(error);
        }
        return json;
    });
}