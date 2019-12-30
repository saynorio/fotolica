import API from "src/RESTAPIs/API.js"

export default class AlbumController {
    async fetchAlbumDataFromAPI(userId) {
        let api = new API();
        let promise = new Promise(async (resolve, reject) => {
            const urlToAppend = 'albums?userId=' + userId;
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
