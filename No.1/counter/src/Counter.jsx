import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const Increment = () =>{
        setCount(count+1)
    }
    const Decrement = () =>{
        setCount(count-1)
    }
    const Reset = () =>{
        setCount(0)
    }
  return (
    
    <div>
      <h1>Counter Program</h1>
      <p className='Count-display'>{count}</p>
      <button onClick={Increment} className='Increment'>Increment</button>
      <button onClick={Decrement} className='Decrement'>Decrement</button>
      <button onClick={Reset} className='Reset'>Reset</button>
    </div>
  )
}

export default Counter
