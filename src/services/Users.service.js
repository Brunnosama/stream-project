import { apiUrl } from "./Api.service"
import { removeStorageItem, setStorageItem } from "./Storage.service"

export const login = async (credentialsData) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentialsData),
        headers: {
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()
    if (!response.ok) {
        const message = data === 'Incorrect password' || data === 'Cannot find user' ? 'Credentials Invalid.' : 'Response not OK.'
        throw new Error(message)
    }
    return processLoginResponse(data)
}

export const logout = () => {
    removeStorageItem('user')
}

export const createUser = async (userData) => {
    const body ={
        ...userData,
        type: 2
    }
    const response = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()
    if (!response.ok) {
        const message = typeof data === 'string' ? data : 'Response not OK.'
        throw new Error(message)
    }
    return processLoginResponse(data)
}

const processLoginResponse = (data) => {
    const userData = {
        accessToken: data.accessToken,
        ...data.user
    }
    setStorageItem('user', JSON.stringify(userData))
    return userData

}