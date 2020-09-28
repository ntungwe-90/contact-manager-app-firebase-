import React from 'react';
import { Link } from 'react-router-dom';

const UsersInfo = ({ name, email, tell, id, removeUser }) => {
    const handleClick = () => {
        removeUser(id)
    }
    return (
        <div>
            <h4>name: {name}</h4>
            <h4>email:{email}</h4>
            <h4>tell:{tell}</h4>
            <button onClick={handleClick}>Remove user</button>
            <Link to={`/edit/${id}`}>Edit user</Link>
            <hr />

        </div>
    );
}

export default UsersInfo;
