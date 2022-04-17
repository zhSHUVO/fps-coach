import React from "react";
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="d-flex justify-content-center p-5">
            <div className="col-lg-6 col-sm-12">
                <h1 className="text-center text-danger">Q&A</h1>
                <div className="mt-5">
                    <h3>
                        Difference between authentication and authorization.
                    </h3>
                    <p>
                        <span>-</span> Authentication and Authorization are the
                        first line of defense of any online platform. Both of
                        them handle task in their own way. Authentication is the
                        verification system of the user. It identifies who the
                        user is. Then the authentication system selects what
                        resource that user can access. So, first comes the
                        authentication parts and if a user passes that
                        verification system then comes the authorization system.
                        User can change the authentication options. But
                        authorization system is handled by the organization.
                    </p>
                </div>
                <div className="mt-5">
                    <h3>
                        Why are you using firebase? What other options do you
                        have to do to implement authentication?
                    </h3>
                    <p>
                        <span>-</span> Google firebase is a mobile or web
                        application development platform. It is developed by
                        google. It offers database, deployment and cloud
                        services. To implement authentication we have to do
                        couple of things. They are:
                    </p>
                    <ul>
                        <li>Add firebase to JS project.</li>
                        <li>Create firebase project.</li>
                        <li>Enable Sign-in method.</li>
                        <li>Creat auth provider.</li>
                        <li>
                            Creat user by passing email and pass to
                            "createUserWithEmailAndPassword".
                        </li>
                        <li>
                            Creat new account by passing email and pass to
                            "signInWithEmailAndPassword".
                        </li>
                        <li>
                            If we want to signout, we can jyst call "signOut()".
                        </li>
                    </ul>
                </div>
                <div className="mt-5">
                    <h3>
                        What other services does firebase provide other than
                        authentication
                    </h3>
                    <p>
                        <span>-</span> Firebase products are:
                    </p>
                    <ul>
                        <li>Cloud Firestore</li>
                        <li>Realtime Database</li>
                        <li>Remote Config</li>
                        <li>Firebase ML</li>
                        <li>Cloud Function</li>
                        <li>Authentication</li>
                        <li>Cloud Messanging</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Perfomance Monitore</li>
                        <li>Test Lab</li>
                        <li>App Distribution</li>
                        <li>Dynamic Links</li>
                    </ul>
                    <p>And many more.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
