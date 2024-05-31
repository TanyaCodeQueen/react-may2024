import React, {FC} from 'react';
import {IPostModel} from "../model/IPostModel";
import {Link, useNavigate} from "react-router-dom";
interface IProps {
    post:IPostModel
}
const PostComponent:FC<IProps>= ({post}) => {
    const navigate=useNavigate();
    return (
        <Link to={post.id.toString()} >{post.id}:
            {post.title}{post.body}
            <hr/>
            <button onClick={
                ()=>{navigate(post.id.toString(),{state:{foo:'foobar'}})}
            }>Show all comments</button>
        </Link >

    );
};

export default PostComponent;