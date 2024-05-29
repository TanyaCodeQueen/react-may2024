import React,{FC } from 'react';
import {ICommentModel} from "../model/ICommentModel";

interface IProps {
    comment:ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div> {comment.id}:
            {comment.name}
            {comment.email}
            {comment.body}
            <hr/>
        </div>)


};

export default CommentComponent;