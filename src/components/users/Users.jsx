import React, { use } from 'react';

const Users = ({ UserPromised }) => {

    const users = use(UserPromised)
    console.log(users);

    return (
        <div>
            <h2>Users Data :{users.length}</h2>
        </div>
    );
};

export default Users;