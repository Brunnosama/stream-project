import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { createUser } from '../../services/Users.service';
import { userLogin } from '../../store/User/User.actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export function SignUpForm() {
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        const newFormData = { ...formData }
        const name = event.target.name
        newFormData[name] = event.target.value
        setFormData(newFormData)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event) => {

        try {
            event.preventDefault()
            setIsSubmiting(true)

            const userData = {
                ...formData
            }
            const createdUserData = await createUser(userData)
            const action = userLogin(createdUserData)
            dispatch(action)
            navigate('/dashboard')


        } catch (error) {
            if (error.message === "Email already exists") {
                toast.error("This email has already been used")
            }
            else {
                toast.error('Failed to sign up. Please, try again.')
            }
            setIsSubmiting(false)
        }


    }

    return (
        <>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="signup-name">
                    <Form.Label className="mb-0">Name</Form.Label>
                    <Form.Control
                        type="text"
                        name='name'
                        placeholder="Tell us your name"
                        required
                        value={formData.name}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signup-email">
                    <Form.Label className="mb-0">E-mail</Form.Label>
                    <Form.Control
                        type="text"
                        name='email'
                        placeholder="example@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signup-password">
                    <Form.Label className="mb-0">Password</Form.Label>
                    <Form.Control
                        type="text"
                        name='password'
                        placeholder="Define your password"
                        required
                        minLength={4}
                        value={formData.password}
                        onChange={handleChange} />
                </Form.Group>
                <Button
                    className="mb-3"
                    type="submit"
                    variant="dark"
                    disabled={isSubmiting}
                >{isSubmiting ? 'Sending...' : 'Register'}</Button>
            </Form>

        </>

    );
}