import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsOfPostComponent from '../components/CommentsOfPostComponent';
import { ICommentModel } from '../model/ICommentModel';
import { ApiService } from '../services/api.service';

const CommentsOfPostPage = () => {
    const { id } = useParams();
    console.log(id)
    const [commentsOfPost, setCommentsOfPost] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (id) {
            ApiService.getCommentsOfPost(id).then(response => {
               setCommentsOfPost(response.data);
            }).catch(error => {
                console.error("Error fetching comments: ", error);
            });
        }
    }, [id]);

    return (
        <div>
            <CommentsOfPostComponent comments={commentsOfPost} />
        </div>
    );
};

export default CommentsOfPostPage;
