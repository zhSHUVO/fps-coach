import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, resetSending, resetError] =
        useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    if (resetError) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (resetSending) {
        return <p>Sending...</p>;
    }

    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h2 className="form-title mb-4">Login</h2>
                <Form className="mb-2" onSubmit={handleUserSignIn}>
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

                    <p style={{ color: "red" }}>{error?.message}</p>
                    {loading && <p>Loading...</p>}
                    <Button variant="danger" type="submit" size="lg">
                        Login
                    </Button>
                </Form>

                <Link
                    className="text-decoration-none text-danger"
                    to="/reset-pass"
                >
                    Forgot Password?
                </Link>

                <p className="mt-3">
                    New User? <br />
                    <Link
                        className="text-decoration-none text-danger"
                        to="/signup"
                    >
                        SignUp.
                    </Link>
                </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
