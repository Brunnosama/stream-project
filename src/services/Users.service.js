import { apiUrl } from "./Api.service"

export const login = async (credentialsData) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentialsData),
        headers: {
            'Content-type': 'application/json'
        }
    })

    if (!response.ok) {
        const error = await response.json()
        const message = error === 'Incorrect password' || error === 'Cannot find user' ? 'Credentials Invalid.' : 'Response not OK.'
        throw new Error(message)
    }
}