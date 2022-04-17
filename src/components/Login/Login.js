import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h2 className="form-title">Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>

                    <p style={{ color: "red" }}></p>
                    <Button variant="danger" type="submit" size="lg">
                        Login
                    </Button>
                </Form>
                <p>
                    New User?
                    <Link className="text-decoration-none" to="/signup">
                        SignUp.
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
