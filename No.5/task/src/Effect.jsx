import React from 'react'
import { useEffect, useState } from 'react'


const Effect = () => {

    const[data, setData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then((res) => res.json())
            .then((data)=> setData(data));
    }, [])
  return (
    <div>
      <h1>todos</h1>
      <ul>
        {data.map((items)=>(
            <li>{items.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Effect
