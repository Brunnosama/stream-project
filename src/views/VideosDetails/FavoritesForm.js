import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

export function FavoritesForm({videoId}) {

    const [generalError, setGeneralError] = useState ()
    const [isSubmiting, setIsSubmiting] = useState(false)
    // CREATE A HOOK TO PERSIST DATA INSIDE A VARIABLE (HERE, AS AN OBJECT)
    const [formData, setFormData] = useState({
        listName: ''
    })

    //CREATE A FUNCTION TO HANDLE THE CHANGE OF THE PERSISTED DATA BY PASSING IT THROUGH THE HOOK
    const handleChange = (event) => {

        //CREATE NEW VARIABLE WITH THE ORIGINAL formData BECAUSE THE HOOK PREVENT CHANGES TO THE ORIGINAL STATE
        const newFormData = {...formData}
        const name = event.target.name

        //IDENTIFY THE PLACE CALLING THE CHANGE (HERE BY THE INPUT "NAME") AND CHANGE JUST THE TARGETED ATRIBUTE
        newFormData[name] = event.target.value
        
        //SEND THE NEW VALUE TO THE PERSISTED STATE THROGH THE HOOK
        setFormData(newFormData)
    }

    const handleSubmit = async (event) => {

        try {
            event.preventDefault()
            setIsSubmiting(true)
            //TO CLEAN THE SCREEN OF THE ERROR CASE IF IT'S RELOADING AGAIN:
            setGeneralError(undefined)

            const body ={
                ...formData,
                videoId: parseInt(videoId)
            }
            await fetch('http://localhost:3001/favorites', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        } catch {
            setGeneralError('Failed to register favorites. Try again.')
        }
        setIsSubmiting(false)
        
    }

    return (
        <>
            <h2>Add to Favorites</h2>

            {generalError && (
                <Alert variant='danger'>{generalError}</Alert>
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
                    variant="dark">{isSubmiting? 'Sending...' : 'Add Video'}</Button>
            </Form>

        </>

    );
}