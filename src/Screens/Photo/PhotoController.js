import API from "src/RESTAPIs/API.js"

export default class PhotoController {
    async fetchPhotoDataFromAPI(albumId) {
        let api = new API();
        let promise = new Promise(async (resolve, reject) => {
            const urlToAppend = 'photos?albumId=' + albumId;
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
