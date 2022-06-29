import React,{ useState} from 'react'
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function LoginForm({getUser}) {
    const [form, setForm] = useState({});

    let handleSubmit = (e) => {
        e.preventDefault()

        getUser(form)
    }

    let handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
  return (
    <>
        <Form className='' onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInputChange}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
  )
}

export default LoginForm