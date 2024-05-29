import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";


export const routerConfig = createBrowserRouter([
    {
        // /users
        path: '/',
        element: <MainLayout/>,
        errorElement:<h1>wtf are you doing maaaaan????</h1>,
        children: [ /*child is - Outlet in your layout*/
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>,
                children:[
                    {path:':id', element:<PostsComponent/>}
                ]
            },
            // {path:'posts',element:<PostsComponent/>},
            {path:'comments',element: <CommentsComponent/>}
        ]
    },

    // {path: '/another', element: <AnotherLayout/>},


])