import React, {FC, useEffect, useState} from 'react';
import {ApiService} from "../services/api.service";
import {IPostModel} from "../model/IPostModel";
import PostComponent from "./PostComponent";

const PostsComponent: FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        ApiService.getAllPosts().then(value => setPosts(value.data));
    }, []);
    return (
        <div>
            {posts.map(post => <div key={post.id}>
                <PostComponent post={post}/>
            </div>)}
        </div>
    );
};

export default PostsComponent;