import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AuthForm } from '../../components/AuthForm';
import { createFavorite } from '../../services/Favorites.service'
import { selectUser } from '../../store/User/User.selectors';

export function FavoritesForm({ videoId, onRegister }) {
    const user = useSelector(selectUser)
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleFavorites = async () => {

        try {
            setIsSubmiting(true)
            const favoriteData = {
                videoId: parseInt(videoId),
                userId: user.id,
                name: user.name
            }
            await createFavorite(favoriteData)
            toast.success('Video successfully added to Favorites')
            onRegister()

        } catch {
            toast.error('Failed to register favorites. Try again.')
        }
        setIsSubmiting(false)

    }

    return (
        <>

            {user ? (
                <>
                    <h2>Add to Favorites</h2>
                    <Button onClick={handleFavorites} disabled={isSubmiting}>Favorite</Button>
                </>
            ) : (
                <AuthForm redirectAfterLogin={false} />
            )}
        </>

    );
}