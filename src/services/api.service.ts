import axios, {AxiosResponse} from 'axios';
import {IUserModel} from "../model/IUserModel";
import {IPostModel} from "../model/IPostModel";
import {ICommentModel} from "../model/ICommentModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const ApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get("/users");
    },
    getAllPosts:():Promise<AxiosResponse<IPostModel[]>> =>{
        return axiosInstance.get("/posts");

    },
    getAllComments:():Promise<AxiosResponse<ICommentModel[]>> =>{
        return axiosInstance.get("/comments");
    }
}

export {
    ApiService
}