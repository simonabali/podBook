class User {
    constructor(name) {
        this.name = name
    }

    async search(skill) {
        await dataManager.getAllDataFromAPI(skill)
        let data = { podcast: dataManager.podcasts, book: dataManager.books }
        console.log("this is data: " + data)
        renderer.render(RESULTS_TEMPLATE, data, RESULTS_AREA)
    }

    async saveToDB(objectType, title) {
        let user = this.name
        if (objectType == "Podcast") {
            await dataManager.saveToDB(objectType, title, user)
        } else if (objectType == "Book") {
            await dataManager.saveToDB(objectType, title, user)
        }
        let data = { podcast: dataManager.savedPodcasts, book: dataManager.savedBooks }
        console.log(data)
        renderer.render(DB_TEMPLATE, data, DB_AREA)
    }

    async removeFromDB(episode) {
        let user = this.name
        let promise = await dataManager.removeFromDB(episode, user)
        console.log(promise)
        let data = { podcast: dataManager.savedPodcasts }
        console.log(data)
        renderer.render(DB_TEMPLATE, data, DB_AREA)
    }
}