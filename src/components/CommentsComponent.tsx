import React, {FC, useEffect, useState} from 'react';
import {ApiService} from "../services/api.service";
import {ICommentModel} from "../model/ICommentModel";

const CommentsComponent: FC = () => {

    const [comments, setComment] = useState<ICommentModel[]>([]);
    useEffect(() => {
        ApiService.getAllComments().then(value => setComment(value.data));
    }, []);
    return (
        <div>
            {comments.map(comment => <div key={comment.id}>{comment.name}{comment.email}{comment.body} <hr/></div>)}
        </div>
    );
};

export default CommentsComponent;