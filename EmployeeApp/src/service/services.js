import axios from "axios"



const get = (url) => {
    return axios
        .get(url)
        .then((response) => response.data)
        .catch((error) => error)
}

const post = (url, body) => {
    return axios
        .post(url, body, {
            headers: { 'Content-Type': "application/x-www-form-urlencoded" }
        })
        .then((response) => response.data)
        .catch((error) => error)
}


export {
    get,
    post
}
