import React from 'react'
import { useState } from 'react'
import './counting.css'

const Counting = () => {
    const [count, setCount] = useState(0)
    const increase = () =>{setCount(count + 1)}
    const decrease = () =>{setCount(count - 1)}
  return (
    <div className='container'>
      <h1 className='header'>Count: {count}</h1>
      <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default Counting
