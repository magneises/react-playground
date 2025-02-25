import React from 'react'
import { useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div className="container">
        <div className="innerContainer">
          <h1>What will be your count?</h1>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count -1)}>Decrement</button>
          </div>
    </div>
  )
}


  