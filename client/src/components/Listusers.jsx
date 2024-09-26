import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useUserList, useUserListMutate } from '../hooks/useUsersList';

const Listusers = () => {
    const query = useQueryClient();
    const [showUsers, setShowUsers] = useState(false);

    const { data, error, isLoading, isError, isSuccess } = useUserList();

    const { mutate } = useUserListMutate();

    if (isError) console.log("ERROR!")

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isSuccess) {
        console.log("data : ", data)
    }
    return (
        <div>
            <button onClick={() => setShowUsers(true)}>Fetch users</button>
            <button onClick={() => mutate()}>Add user</button>
            <h1>List of users</h1>
            <ul>
                {data && data.map(user =>
                    <li key={user.id}>{user?.name}</li>
                )}
            </ul>
        </div>
    )
}

export default Listusers