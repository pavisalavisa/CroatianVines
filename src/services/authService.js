let authenticated = true

export const logIn = (username, password) => {
    authenticated = true
}

export const logOut = () => {
    authenticated = false
}

export const isAuthenticated = () => {
    return authenticated
}