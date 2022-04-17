import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/google.png";
import "./SocialLogin.css";

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        navigate("/home");
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="bg-danger horizontal-bar"></div>
                <p className="mt-2 px-2">or</p>
                <div className="bg-danger horizontal-bar"></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="border border-danger rounded w-25 d-block mx-auto m-3 p-2 bg-light"
                >
                    <img style={{ width: "30px" }} src={google} alt="" />
                    <span className="px-2">Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
