import { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
    return (
        <>
            <h2>Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="signup-list">
                    <Form.Label className="mb-0">E-mail</Form.Label>
                    <Form.Control
                        type="text"
                        name='email'
                        placeholder="example@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signup-list">
                    <Form.Label className="mb-0">Password</Form.Label>
                    <Form.Control
                        type="text"
                        name='password'
                        placeholder="Define your password"
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
