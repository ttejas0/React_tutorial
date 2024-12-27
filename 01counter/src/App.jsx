import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 15

  const addValue = () =>{
    setCounter(counter + 1)
  }
  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with Tejas {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>{" "}
      <button
      onClick={removeValue}>remove value</button>{" "}
      <p>footer: {counter}</p>
    </>
  )
}

export default App
