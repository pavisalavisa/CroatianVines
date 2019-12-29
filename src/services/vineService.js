const getFeaturedVines = () => {
    console.log('Getting featured vines')
    //TODO: actually go and get it from the API
    return Promise.resolve([
        { 'name': 'Dingac', 'description': 'Very gut', 'image': 'someLink' },
        { 'name': 'Pošip', 'description': 'Very well', 'image': 'someLink' },
        { 'name': 'Malvazija', 'description': 'Not so bad', 'image': 'someLink' },])
}

const getVines = (name) => {

    console.log(`Getting vine with name ${name}.`)
    //TODO: actually go and get it from the API
    return Promise.resolve([{ 'name': 'Zinfandel', 'description': 'Very gut', 'image': 'someLink' },
    { 'name': 'Pošip', 'description': 'Very well', 'image': 'someLink' },
    { 'name': 'Vranac', 'description': 'Not so good', 'image': 'someLink' },])
}

const VineService = {
    getVines,
    getFeaturedVines
}

export default VineService
