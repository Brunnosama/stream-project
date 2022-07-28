import {apiUrl, getAuthorizationHeader} from './Api.service'

export const createFavorite = async (favoriteData) => {
    const response = await fetch(`${apiUrl}/favorites`, {
                method: 'POST',
                body: JSON.stringify(favoriteData),
                headers: {
                    'Content-Type': 'application/json',
                    ...getAuthorizationHeader()
                }
            })
            if(!response.ok) {
                throw new Error('Response not OK.')
            }
}