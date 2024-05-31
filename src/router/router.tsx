import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import PostsOfUserPage from "../pages/PostsOfUserPage";
import CommentsOfPostPage from "../pages/CommentsOfPostPage";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>wtf are you doing maaaaan????</h1>,
        children: [
            { index: true, element: <HomePage/> },
            {
                path: 'users',
                element: <UsersPage/>,
                children: [
                    { path: ':id', element: <PostsOfUserPage/> }
                ]
            },
            {
                path: 'posts',
                element: <PostsPage/>,
                children: [
                    { path: ':id', element: <CommentsOfPostPage/> }
                ]
            },
        ]
    },
]);
