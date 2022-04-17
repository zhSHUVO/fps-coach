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
            <div className="lesson d-flex w-75 mx-auto">
                {lessons.map((lesson) => (
                    <div key={lesson.id}>
                        <div className="card p-4 m-5">
                            <img
                                className="mx-auto mb-3"
                                src={lesson.img}
                                alt=""
                            />
                            <p>{lesson.name}</p>
                            <p>{lesson.description}</p>
                            <p>Trainig Price: {lesson.price}</p>
                            <Link to="/checkout">
                                <Button variant="danger" type="submit">
                                    Checkout
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lessons;
