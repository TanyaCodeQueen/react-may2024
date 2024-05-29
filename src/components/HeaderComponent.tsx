import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <Link to="/">Home page</Link>

    <hr/>
    <Link to="users">Users page</Link>
    <br/>
            <Link to="posts">Posts page</Link>
            <br/>

            <Link to="comments">Comments page</Link>
        </div>
);
};

export default HeaderComponent;