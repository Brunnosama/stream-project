
export async function getVideoById (id) {
    const response = await fetch(`http://localhost:3001/videos/${id}?_embed=favorites`)
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
    return await response.json()
}