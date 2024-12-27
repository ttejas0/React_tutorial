import { useState } from 'react'
import Card from './components/card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Tejas',
    age: 25,
    adress:{
      city: 'Bengaluru',
      state: 'Karnatake',
      Country: 'India'
    }
  }
  let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="Tejas" myArr ={newArr}/>
      <Card username="Json" post="Staff Engineer."/>
      <Card/>
    </>
  )
}

export default App

