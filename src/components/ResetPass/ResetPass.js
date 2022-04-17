import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
    const [email, setEmail] = useState("");
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }

    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h2 className="form-title mb-4">Password Reset</h2>
                <Form>
                    <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Control
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Button
                        onClick={async () => {
                            await sendPasswordResetEmail(email);
                            alert("Sent email");
                        }}
                        variant="danger"
                        type="submit"
                        size="lg"
                    >
                        Reset
                    </Button>
                </Form>
            </div>

            
        </div>
    );
};

export default Login;
