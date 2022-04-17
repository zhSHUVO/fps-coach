import React from "react";
import "./NotFount.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h3>
                The page you are looking for isn't available. Maybe you typed
                wrong.
            </h3>
            <h1>
                <span>404</span> Not Found
            </h1>
        </div>
    );
};

export default NotFound;
