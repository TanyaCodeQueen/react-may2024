import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";

import {IPostModel} from "../model/IPostModel";
import {ApiService} from "../services/api.service";

const PostsPage = () => {

   
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        ApiService.getAllPosts().then(value => setPosts(value.data));
    }, []);


    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;