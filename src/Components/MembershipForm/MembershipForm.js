import React from 'react';
import { Form, Col } from 'react-bootstrap';


const MembershipForm = (props) => {
    return (
        <div>
            <Form style={{ padding: '100px' }}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required={true} type="text" placeholder="Enter First name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your Email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridMobileNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter your mobile number" />
                    </Form.Group>

                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridMobileNumber">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridMobileNumber">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Address1</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                
            </Form>
        </div>
    );
};

export default MembershipForm;