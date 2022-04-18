import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Checkout.css";

const Checkout = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleNameBlur = (event) => {
        setName(event.target.value);
    };

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneBlur = (event) => {
        setPhone(event.target.value);
    };

    const handleCreatUser = (event) => {
        event.preventDefault();
        const checkout = { name, email, address, phone };
        console.log(checkout);
    };

    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h2 className="form-title mb-4">Checkout Form</h2>
                <Form onSubmit={handleCreatUser}>
                    <Form.Group className="mb-4" controlId="formGroupName">
                        <Form.Control
                            onBlur={handleNameBlur}
                            type="text"
                            placeholder="Enter Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Control
                            value={user?.email}
                            readOnly
                            type="email"
                            placeholder="Enter Email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupAddress">
                        <Form.Control
                            onBlur={handleAddressBlur}
                            type="text"
                            placeholder="Address"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupPhone">
                        <Form.Control
                            onBlur={handlePhoneBlur}
                            type="text"
                            placeholder="Enter Phone Number"
                            required
                        />
                    </Form.Group>
                    <p style={{ color: "red" }}>{error}</p>
                    <Button variant="danger" type="submit" size="lg">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;
