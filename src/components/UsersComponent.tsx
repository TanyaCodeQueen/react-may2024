import React, {FC, useEffect, useState} from 'react';
import {ApiService} from "../services/api.service";
import {IUserModel} from "../model/IUserModel";
import UserComponent from "./UserComponent";

const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        ApiService.getAllUsers().then(value => setUsers(value.data));
    }, []);
    return (
        <div>
            {users.map(user => <div key={user.id}>
                <UserComponent user={user}/>
            </div>)}
        </div>
    );
};

export default UsersComponent;