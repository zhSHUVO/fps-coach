import React, { useEffect, useState } from "react";
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
            <h1>Hello</h1>
            <p>
                As a fps couch I'll tech you current games with eSports games
                and their tectics. I'll try my best to improve you. Some of my
                services are given below.
            </p>
            <div className="lesson d-flex w-75 ">
                {lessons.map((lesson) => (
                    <div key={lesson.id}>
                        <div className="card p-5">
                            <img className="w-50" src={lesson.img} alt="" />
                            <p>{lesson.name}</p>
                            <p>{lesson.description}</p>
                            <p>Trainig Price: {lesson.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lessons;
