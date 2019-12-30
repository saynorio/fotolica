const baseUrl = 'https://jsonplaceholder.typicode.com/'

class API {
    GET = function (urlToAppend) {
        const completeUrl = baseUrl.concat("", urlToAppend);
        return fetch(completeUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
export default API; 