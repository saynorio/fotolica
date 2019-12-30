import API from "src/RESTAPIs/API.js"

export default class HomeController {
    async fetchUserDataFromAPI() {
        let api = new API();
        let promise = new Promise(async (resolve, reject) => {
            const urlToAppend = 'users';
            try {
                var result = await api.GET(urlToAppend)
                return resolve(result)
            }
            catch (err) {
                return reject(err)
            }
        })
        return promise
    }
}
