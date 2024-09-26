import { useQueryClient } from '@tanstack/react-query'
import React from 'react'

const BackupUsers = () => {
    const query = useQueryClient();

    const users = query.getQueryData(['users']);

    console.log("users : ", users)
    return (
        <div>
            <h1>Backup users</h1>
            <ul>
                {users && users.map(user =>
                    <li key={user.id}>{user?.name}</li>
                )}
            </ul>
        </div>
    )
}

export default BackupUsers