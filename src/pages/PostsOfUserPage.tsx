import React, {useEffect, useState} from 'react';
import PostsOfUserComponent from "../components/PostsOfUserComponent";
import {useLocation, useParams} from "react-router-dom";
import {IPostModel} from "../model/IPostModel";
import {ApiService} from "../services/api.service";

const PostsOfUserPage = () => {
    const{id}=useParams();
    const location=useLocation();
    console.log(location);

    const[postsOfUser,setPostsOfUser]=useState<IPostModel[]>([]);
    useEffect(() => {
        if(id){ ApiService.getPostOfUser(id).then(value=>setPostsOfUser(value.data))}

    }, [id]);
    return (
        <div>
            <PostsOfUserComponent posts={postsOfUser}/>
            </div>
    );
};

export default PostsOfUserPage;