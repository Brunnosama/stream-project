import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export function FavoritesForm() {

    // CREATE A HOOK TO PERSIST DATA INSIDE A VARIABLE (HERE, AS AN OBJECT)
    const [formData, setFormData] = useState({
        favorite: ''
    })

    //CREATE A FUNCTION TO HANDLE THE CHANGE OF THE PERSISTED DATA BY PASSING IT THROUGH THE HOOK
    const handleChange = (event) => {

        //CREATE NEW VARIABLE WITH THE ORIGINAL formData BECAUSE THE HOOK PREVENT CHANGES TO THE ORIGINAL STATE
        const newFormData = {
            ...formData
        }

        //IDENTIFY THE PLACE CALLING THE CHANGE (HERE BY THE INPUT "NAME") AND CHANGE JUST THE TARGETED ATRIBUTE
        newFormData[event.target.name] = event.target.value
        
        //SEND THE NEW VALUE TO THE PERSISTED STATE THROGH THE HOOK
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