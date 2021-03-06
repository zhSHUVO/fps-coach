import React from "react";
import { FaFacebook, FaGithub, FaTwitch, FaYoutube } from "react-icons/fa";
import banner from "../../images/banner.jpg";
import Lessons from "../Lessons/Lessons";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="banner mt-5 mb-5">
                <img className="w-100" src={banner} alt="" />
            </div>

            <Lessons></Lessons>

            <div className="mt-5">
                <h1 className="text-center">Featured Video</h1>
                <iframe
                    className=" d-flex mx-auto"
                    width="960"
                    height="540"
                    src="https://www.youtube.com/embed/spTutRGM6FQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>

            <footer className="d-flex flex-column align-items-center pt-3 pb-3 mt-5 bg-dark text-light">
                <h2>FPS COACH</h2>

                <div className="social">
                    <FaGithub
                        className="ms-3 me-3"
                        size={"2em"}
                        color="red"
                    ></FaGithub>

                    <FaFacebook
                        className="ms-3 me-3"
                        size={"2em"}
                        color="red"
                    ></FaFacebook>

                    <FaTwitch
                        className="ms-3 me-3"
                        size={"2em"}
                        color="red"
                    ></FaTwitch>

                    <FaYoutube
                        className="ms-3 me-3"
                        size={"2em"}
                        color="red"
                    ></FaYoutube>
                </div>
            </footer>
        </div>
    );
};

export default Home;
