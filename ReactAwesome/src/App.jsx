import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Create a counter that displays the counter: 2 buttons, 1 for the increment and 1 for the decrement
// Clicking on the increment increased the counter by 1: clicking on th decrement decreases the counter by 1
// Counter should not go below zero

function App() {
  const [count, setCount] = useState(0)
  console.log(count);
  
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    // setCount(count - 1)
    if(count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div>
        <h1>Current Counter</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {count}
      </div>
    </>
  )
}

export default App

