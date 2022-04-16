import React from "react";
import banner from "../../images/banner.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner mt-5 mb-5">
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;
