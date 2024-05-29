import React, {FC, useEffect, useState} from 'react';
import {ApiService} from "../services/api.service";
import {ICommentModel} from "../model/ICommentModel";
import CommentComponent from "./CommentComponent";
const CommentsComponent: FC = () => {

    const [comments, setComment] = useState<ICommentModel[]>([]);
    useEffect(() => {
        ApiService.getAllComments().then(value => setComment(value.data));
    }, []);
    return (
        <div>
            {comments.map(comment => <div key={comment.id}> <CommentComponent comment={comment}/></div>)}
        </div>
    );
};

export default CommentsComponent;