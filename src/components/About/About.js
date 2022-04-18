import React from "react";
import pic from "../../images/profile-pic.jpg";

const About = () => {
    return (
        <div className="d-flex justify-content-center p-5">
            <div className="col-lg-6 col-sm-12">
                <h1 className="text-center">About Me</h1>
                <div className="text-center ">
                    <img className="w-50" src={pic} alt="" />
                    <h3>Zayed Hassan Bhuiyan</h3>
                    <p className="pt-3">
                        Assalamualaikum everyone. I'm a computer science
                        studying at Daffodil Internation University, Bangladesh.
                        Currently my goal is to be good at web development. I
                        try my best to balance everything. Though it's hard
                        sometime, like I'm doing this assignment during semester
                        final exam. Allah is with me, Inshallah I'll do
                        everything to make this goal come true. Pray for me.{" "}
                        <span>Thank YOU</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
