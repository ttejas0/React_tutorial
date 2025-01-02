import { useState } from 'react'
import './App.css'
import Login from './Compontents/Login'
import Profile from './Compontents/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React video for context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App