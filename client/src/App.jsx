import React, { useState } from 'react'
import './App.css'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import BackupUsers from './components/BackupUsers'

const App = () => {

  const [showUsers, setShowUsers] = useState(false);

  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/users');
      return response.data;
    },
    enabled: showUsers
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await axios('http://localhost:3000/users', {
        method: 'POST',
        data: {
          id: 5, name: 'Ramees'
        }
      })
    }
  })

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

      <BackupUsers />
    </div>
  )
}

export default App