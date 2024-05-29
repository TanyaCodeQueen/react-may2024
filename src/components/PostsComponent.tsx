import React, {FC, useEffect, useState} from 'react';
import {ApiService} from "../services/api.service";
import {IPostModel} from "../model/IPostModel";

const PostsComponent: FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        ApiService.getAllPosts().then(value => setPosts(value.data));
    }, []);
    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.title}{post.body} <hr/></div>)}
        </div>
    );
};

export default PostsComponent;