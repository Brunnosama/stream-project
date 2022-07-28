import { apiUrl, getAuthorizationHeader } from './Api.service'


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

export const deleteVideo = async (id) => {
    const response = await fetch(`${apiUrl}/videos/${id}`, {
        method: 'DELETE',
        headers: getAuthorizationHeader()

    })
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
}

export const createVideo = async (videoData) => {
    const response = await fetch(`${apiUrl}/videos`, {
        method: 'POST',
        body: JSON.stringify(videoData),
        headers: {
            'Content-type': 'application/json',
            ...getAuthorizationHeader()
        }
    })

    if (!response.ok) {
        throw new Error('Response not OK.')
    }
}

export const updateVideo = async (id, videoData) => {
    const response = await fetch(`${apiUrl}/videos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(videoData),
        headers: {
            'Content-type': 'application/json',
            ...getAuthorizationHeader()
        }
    })

    if (!response.ok) {
        throw new Error('Response not OK.')
    }
}