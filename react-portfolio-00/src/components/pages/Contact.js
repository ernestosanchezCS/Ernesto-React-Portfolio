import React from 'react';
import { Form, Button } from 'react-bootstrap';
export default function Contact() {
    return (
        <div className='container'>
            <h1>
                <u>Contact Page</u>
            </h1>
            <h4 className=''>
                Here is my contact information. <br></br> Feel free to reach
                out! Or message me from this page.
            </h4>
            <br></br>
            <br></br>
            <div className='row'>
                <div className='col-md-4 text-center mt-auto mb-auto'>
                    <h5>Email: </h5>
                    <p>ernestosanchez8888@gmail.com</p>
                    <h5>Phone: </h5>
                    <p>(647) 786-8014</p>
                </div>
                <Form className='col-8 mx-auto'>
                    <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='email' placeholder='John Doe' />
                    </Form.Group>
                    <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput2'
                    >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='name@example.com'
                        />
                    </Form.Group>
                    <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlTextarea1'
                    >
                        <Form.Label>Your Message: </Form.Label>
                        <Form.Control as='textarea' rows={5} />
                    </Form.Group>
                    <Button
                        className='btn-dark'
                        variant='primary'
                        type='submit'
                    >
                        Submit
                    </Button>
                </Form>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
