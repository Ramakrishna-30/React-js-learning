import React, { useState } from 'react'

const Counter = () => {
  const[number, setnumber]=useState(0)

  const increament=()=>{
    setnumber(number +1)
  }
  const decreament=()=>{
    if(number>0){
        setnumber(number -1)
    }
  }
  const reset=()=>{
    setnumber(0)
  }


  return (
    <div className='count'>
        <h2>Counter App</h2> 
        <h1>{number}</h1>
        <div className='b'>
        <button className='b1' onClick={increament}>increament</button>
        <button className='b2' onClick={decreament}>decreament</button>
        <button className='b3' onClick={reset}>reset</button>
        </div>
    </div>
  )
}

export default Counter