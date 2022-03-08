import {apiUrl} from './Api.service'

export const createFavorite = async (favoriteData) => {
    await fetch(`${apiUrl}/favorites`, {
                method: 'POST',
                body: JSON.stringify(favoriteData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
}