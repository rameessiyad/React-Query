import React, { useState } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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

  if(isError) console.log("ERROR!")

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isSuccess) {
    console.log("data : ", data)
  }

  return (
    <div>
      <button onClick={() => setShowUsers(true)}>Fetch users</button>
      <h1>List of users</h1>
      <ul>
        {data && data.map(user =>
          <li key={user.id}>{user?.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App