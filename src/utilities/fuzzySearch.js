import Fuse from "fuse.js"

const searchOptions = {
    "wines": {
        keys: [{
            name: 'Name',
            weight: 0.8
        }, {
            name: 'Description',
            weight: 0.2
        }]
    },
    "wineries": {
        keys: [{
            name: 'Name',
            weight: 0.8
        }, {
            name: 'Description',
            weight: 0.2
        }]
    },
}

const search = (list, searchValue, searchEntity) => {
    const entityOptions = searchOptions[searchEntity]
    var fuse = new Fuse(list, entityOptions)

    return fuse.search(searchValue)
}

export const searchWines = (wineList, searchValue) => search(wineList, searchValue, "wines")

export const searchWineries = (wineryList, searchValue) => search(wineryList, searchValue, "wineries")

