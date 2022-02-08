import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export function FavoritesForm() {

    const [name, setName] = useState('')

    return (
        <>
            <h2>Add to Favorites</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFavorites">
                    <Form.Label>Select the Favorite list</Form.Label>
                    <Form.Control type="text" placeholder="Enter list name" />
                </Form.Group>
            </Form>
            <Button variant="dark">Add Video</Button>
            {/*             
            <input
                type='text'
                placeholder="Name uncontrolled"
            />
            <input
                type='text'
                placeholder="Name controlled"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <p>{name}</p> */}
        </>

    );
}