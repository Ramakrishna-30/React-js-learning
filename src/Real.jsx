import React, { useState } from 'react'

const Real = () => {
    const[inputvalue, setInputvalue]=useState('');

    const handleInputchange=(e)=>{
        setInputvalue(e.target.value)
    };

  return (
    <div className='c'>
       <h2>Real-time Input</h2>

       <input
       type='text'
       value={inputvalue}
       placeholder='type something...'
       onChange={handleInputchange}
       />
     <div className='c1'>
        <h3 >Live Preview:</h3>
        <p>{inputvalue}</p>
     </div>


    </div>
  )
}

export default Real