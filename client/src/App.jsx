import React from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const App = () => {
  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/users');
      return response.data;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isSuccess) {
    console.log("data : ", data)
  }

  return (
    <div>List of users</div>
  )
}

export default App