import React, {FC} from 'react';
import {IUserModel} from "../model/IUserModel";

interface IProps {
    user:IUserModel
}
const UserComponent:FC<IProps>= ({user}) => {
    return (
        <div >{user.id}:{user.name}</div>
    );
};

export default UserComponent;