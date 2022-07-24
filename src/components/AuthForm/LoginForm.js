import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { login } from "../../services/Users.service";

export function LoginForm() {
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        const newFormData = { ...formData }
        const name = event.target.name
        newFormData[name] = event.target.value
        setFormData(newFormData)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setIsSubmiting(true)
            await login(formData)
        } catch (error) {
            const message = error.message === 'Credentials Invalid.' ? 'Incorrect email or password.' : 'Fail to Login. Please, try again.'
            toast.error(message)
        }
        setIsSubmiting(false)
    }

    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="login-email">
                    <Form.Label className="mb-0">E-mail</Form.Label>
                    <Form.Control
                        type="text"
                        name='email'
                        placeholder="example@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="login-password">
                    <Form.Label className="mb-0">Password</Form.Label>
                    <Form.Control
                        type="text"
                        name='password'
                        placeholder="Access password"
                        required
                        value={formData.password}
                        onChange={handleChange} />
                </Form.Group>
                <Button
                    className="mb-3"
                    type="submit"
                    variant="dark"
                    disabled={isSubmiting}
                >{isSubmiting ? 'Sending...' : 'Login'}</Button>
            </Form>
        </>
    );
}
