import { useState } from "react";
import { Button, Form } from "react-bootstrap";


const emptyState = {
    title: '',
    releaseYear: '',
    description: '',
    direction: '',
    img: '',
    genres: ''
}


export function UpsertVideo({ onSubmit, buttonLabel = "Add Video", initialState = emptyState }) {
    const [formData, setFormData] = useState(initialState)
    const handleChange = (event) => {
        const { value, name } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
        
        //INSTEAD OF CREATING A VARIABLE WITH THE DATA AND ALTERING IT AFTER (LIKE IN FavoritesForm), USE 'formData' AS THE OBJECT AND CHANGE THE 'name' and 'value' DIRECTLY INSIDE IT
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(formData)

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='video-name'>
                <Form.Label className='mb-0'>Title</Form.Label>
                <Form.Control
                    placeholder='Video Title'
                    required
                    value={formData.title}
                    onChange={handleChange}
                    name='title'
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='video-year-release'>
                <Form.Label className='mb-0'>Year of Release</Form.Label>
                <Form.Control
                    placeholder='Year of Release'
                    required
                    value={formData.releaseYear}
                    onChange={handleChange}
                    name='releaseYear'
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='video-description'>
                <Form.Label className='mb-0'>Description</Form.Label>
                <Form.Control
                    as='textarea'
                    placeholder='Description'
                    required
                    value={formData.description}
                    onChange={handleChange}
                    name='description'
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='video-direction'>
                <Form.Label className='mb-0'>Direction</Form.Label>
                <Form.Control
                    placeholder='Direction'
                    required
                    value={formData.direction}
                    onChange={handleChange}
                    name='direction'
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='video-image'>
                <Form.Label className='mb-0'>Image</Form.Label>
                <Form.Control
                    placeholder='Add link to the image'
                    required
                    value={formData.img}
                    onChange={handleChange}
                    name='img'
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='video-genres'>
                <Form.Label className='mb-0'>Genres</Form.Label>
                <Form.Control
                    placeholder='Genres'
                    required
                    value={formData.genres}
                    onChange={handleChange}
                    name='genres'
                />
            </Form.Group>
            <Button type='submit'>{buttonLabel}</Button>
        </Form>
    )
}
