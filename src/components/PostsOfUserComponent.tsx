import React, { FC } from 'react';
import PostComponent from "./PostComponent";
import { IPostModel } from "../model/IPostModel";

interface IProps {
    posts: IPostModel[];
}

const PostsOfUserComponent: FC<IProps> = ({ posts }) => {
    return (
        <div>
            {posts.map(post => (
                <PostComponent key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostsOfUserComponent;
