import API from "src/RESTAPIs/API.js"

var api = new API();

export default class HomeController {
    async fetchUsersDataFromAPI() {
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
