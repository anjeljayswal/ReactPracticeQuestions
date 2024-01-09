import React from 'react'

function EventHandling() {
    const getInput=(event)=>{
        console.log(event.target.name);
    }
    const addnums = (num1 , num2)=>{
        console.log(num1 + num2);

    }
  return (
    <div className='card'>
        <input placeholder="Add Something.." onChange={getInput} name='input' type="" />
        <button onClick={()=>addnums(2 , 4)}>Add Number</button>
      
    </div>
  )
}

export default EventHandling
