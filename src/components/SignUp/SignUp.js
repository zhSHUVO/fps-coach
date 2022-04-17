import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setComfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = (event) => {
        setComfirmPassword(event.target.value);
    };

    if (user) {
        navigate("/home");
        console.log("user", user);
    }

    const handleCreatUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Pass didn't match!!");
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6 charecters or longer!");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h2 className="form-title mb-4">SignUp</h2>
                <Form onSubmit={handleCreatUser}>
                    <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Control
                            onBlur={handleEmailBlur}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupPassword">
                        <Form.Control
                            onBlur={handlePasswordBlur}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-4"
                        controlId="formGroupConfirmPassword"
                    >
                        <Form.Control
                            onBlur={handleConfirmPasswordBlur}
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />
                    </Form.Group>
                    <p style={{ color: "red" }}>{error}</p>
                    <Button variant="danger" type="submit" size="lg">
                        SignUp
                    </Button>
                </Form>
                <p className="mt-3">
                    Already have an account? <br />
                    <Link
                        className="text-decoration-none text-danger"
                        to="/login"
                    >
                        Login.
                    </Link>
                </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;
