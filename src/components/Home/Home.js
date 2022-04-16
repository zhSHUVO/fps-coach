import React from "react";
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
        </div>
    );
};

export default Home;
