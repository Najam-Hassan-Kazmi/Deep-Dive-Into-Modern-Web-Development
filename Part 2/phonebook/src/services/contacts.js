import axios from "axios"
const baseUrl = "http://localhost:3001/contacts"

const add = contact => {// Function to add a new contact to the backend
    const request = axios.post(baseUrl, contact)
    return request.then(response => response.data)
}

const getAll = () => {// Function to get all of the contacts we have in the backend file
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const remove = id => {// Function to delete a contact from the backend
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const replace = (id, updatedContact) => {// Function to update the number of an already created contact in the backend
    const request = axios.put(`${baseUrl}/${id}`, updatedContact)
    return request.then(response => response.data)
}

export default {add, getAll, remove, replace}