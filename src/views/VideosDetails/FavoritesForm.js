import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { createFavorite } from '../../services/Favorites.service'

//CREATE A FUNCTION TO CLEAN THE INPUTS WITH A EMPTY VALUE, TO USE AS A INITIAL VALUE OF THE STATE
const initialValue = {
    name: ''
}
// "onRegister" IS A FUNCTION PROPRETY FROM THE PARENT RECEIVED AS PARAMS TO SEND INFO BACK TO THE PARENT WHEN EXECUTED.
export function FavoritesForm({ videoId, onRegister }) {

    const [generalError, setGeneralError] = useState()

    //CREATE A SUBMITING MESSAGE ON BUTTON
    const [isSubmiting, setIsSubmiting] = useState(false)

    //CREATE A HOOK TO SHOW IF THE ADDITION TO FAVORITES WAS OK
    const [showSuccess, setShowSuccess] = useState(false)

    // CREATE A HOOK TO PERSIST DATA INSIDE A VARIABLE (HERE, AS AN OBJECT)
    const [formData, setFormData] = useState(initialValue)

    //CREATE A FUNCTION TO HANDLE THE CHANGE OF THE PERSISTED DATA BY PASSING IT THROUGH THE HOOK
    const handleChange = (event) => {

        //CREATE NEW VARIABLE WITH THE ORIGINAL formData BECAUSE THE HOOK PREVENT CHANGES TO THE ORIGINAL STATE
        const newFormData = { ...formData }
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
            //TO NOT SHOW SUCCESS ADDITION UNECESSARY
            setShowSuccess(false)

            const favoriteData = {
                ...formData,
                videoId: parseInt(videoId)
            }
            await createFavorite(favoriteData)

            // TO SHOW SUCESS WHEN ADDING AND TO CLEAN THE INPUTS VALUES
            setShowSuccess(true)
            setFormData(initialValue)
            onRegister()

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
            </Form>

        </>

    );
}