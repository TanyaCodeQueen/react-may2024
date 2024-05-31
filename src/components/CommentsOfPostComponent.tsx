import React, { FC } from 'react';
import { ICommentModel } from '../model/ICommentModel';
import CommentComponent from './CommentComponent';

interface IProps {
    comments: ICommentModel[];
}

const CommentsOfPostComponent: FC<IProps> = ({ comments }) => {
    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <CommentComponent comment={comment} />
                </div>
            ))}
        </div>
    );
};

export default CommentsOfPostComponent;
