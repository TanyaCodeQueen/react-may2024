import React, { FC } from 'react';
import { ICommentModel } from '../model/ICommentModel';

interface IProps {
    comment: ICommentModel;
}

const CommentComponent: FC<IProps> = ({ comment }) => {
    console.log('Rendering comment:', comment); // Add console log

    return (
        <div style={{ background: 'lightgray' }}> {/* Add background */}
            {comment.id}: {comment.name} {comment.email} {comment.body}
            <hr />
        </div>
    );
};

export default CommentComponent;
