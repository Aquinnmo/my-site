import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            <h1>404 Error</h1>
            <p>Sorry, I haven't made this page yet!</p>
            <p>Maybe try going to <Link to="/">Home</Link> </p>
        </div>
    );
};

export default PageNotFound;