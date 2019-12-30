class API {
    GET = async function (urlToAppend) {
        const baseUrl = 'https://jsonplaceholder.typicode.com/'
        const completeUrl = baseUrl.concat("", urlToAppend);
        try {
            const response = await fetch(completeUrl);
            const responseJson = await response.json();
            return responseJson;
        }
        catch (error) {
            console.error(error);
        }
    }
}

export default API; 