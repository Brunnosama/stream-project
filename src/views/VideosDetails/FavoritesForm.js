import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export function FavoritesForm() {

    const [formData, setFormData] = useState({
        favorite: ''
    })

    const handleChange = (event) => {
        const newFormData = {
            ...formData
        }
        newFormData[event.target.name] = event.target.value
        setFormData(newFormData)
    }

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
                        name='favorite'
                        placeholder="Enter list name"
                        required
                        value={formData.favorite}
                        onChange={handleChange} />
                </Form.Group>
                <Button
                    className="mb-3"
                    type="submit"
                    variant="dark">Add Video</Button>
            </Form>

        </>

    );
}