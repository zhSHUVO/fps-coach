import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Lessons.css";

const Lessons = (props) => {
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        fetch("games.json")
            .then((res) => res.json())
            .then((data) => setLessons(data));
    }, []);

    return (
        <div>
            <h1 className="text-center">My Services</h1>
            <p className="text-center w-75 mx-auto">
                I'll help you learn the basics, tips and tricks. Will give you
                some practice routines for aim, sensitivity, movements etc. I'll
                help you get over your weaknesses.
            </p>
            <div className="container">
                <div className="row w-75 mx-auto">
                    {lessons.map((lesson) => (
                        <div className="col" key={lesson.id}>
                            <div className="card mt-3 p-2">
                                <img
                                    className="mx-auto mb-3 mt-3"
                                    src={lesson.img}
                                    alt=""
                                />
                                <p>{lesson.name}</p>
                                <p>{lesson.description}</p>
                                <p>Trainig Price: {lesson.price}</p>
                                <Link to="/checkout">
                                    <Button variant="danger" type="submit">
                                        Hire Me
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lessons;
