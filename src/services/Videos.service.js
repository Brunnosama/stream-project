import {apiUrl} from './Api.service'

export const getVideoById = async (id) => {
    const response = await fetch(`${apiUrl}/videos/${id}?_embed=favorites`)
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
    return await response.json()
}

export const getVideos = async () => {
    const response = await fetch(`${apiUrl}/videos`)
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
    return await response.json()
}