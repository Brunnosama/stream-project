export const getVideoById = async (id) => {
    const response = await fetch(`http://localhost:3001/videos/${id}?_embed=favorites`)
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
    return await response.json()
}

export const getVideos = async () => {
    const response = await fetch('http://localhost:3001/videos')
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
    return await response.json()
}