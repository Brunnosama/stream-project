import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export function FavoritesForm() {

    const [favoriteList, setFavoriteList] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <>
            <h2>Add to Favorites</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="favorites-list">
                    <Form.Label className="mb-0">Select the Favorite list</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter list name"
                        required
                        value={favoriteList}
                        onChange={(event)=> setFavoriteList(event.target.value)
                        }/>
                </Form.Group>
            </Form>
            <Button className="mb-3" type="submit"variant="dark">Add Video</Button>
        </>

    );
}