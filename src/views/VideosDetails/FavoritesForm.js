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
            <h2>Add to Favorites</h2>
            {user ? (
                <Button onClick={handleFavorites} disabled={isSubmiting}>Favorite</Button>
            ) : (
                <AuthForm redirectAfterLogin={false}/>
            )}

            {/* {generalError && (
                <Alert variant='danger'>{generalError}</Alert>
            )}
            {showSuccess && (
                <Alert variant='success'>Video was added to Favorites!</Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="favorites-list">
                    <Form.Label className="mb-0">Select the Favorite list</Form.Label>
                    <Form.Control
                        type="text"
                        name='name'
                        placeholder="Enter list name"
                        required
                        value={formData.name}
                        onChange={handleChange} />
                </Form.Group>
                <Button
                    className="mb-3"
                    type="submit"
                    variant="dark"
                    disabled={isSubmiting}
                >{isSubmiting ? 'Sending...' : 'Add Video'}</Button>
            </Form> */}

        </>

    );
}