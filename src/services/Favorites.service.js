export const createFavorite = async (favoriteData) => {
    await fetch('http://localhost:3001/favorites', {
                method: 'POST',
                body: JSON.stringify(favoriteData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
}