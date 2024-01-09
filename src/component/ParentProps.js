import React, { useState } from 'react'
import ChildProps from './ChildProps'
// 1. pops are nothing but simple varible like state which is pass from parent component to child component
// 2. we can also pass function like changeName using button 
// 3.we can also pass some value child to parent component 

const ParentProps = () => {
    const [name, setName] = useState("Anjali")

    // const changeName = ()=>{
    //     setName("Ram")
    // }

    // child to parent
    const changeName = (value)=>{
        console.log(value);
        setName(value)
    }
  return (
    <div className='card'>
        <ChildProps valuOfProp={name} changeName={changeName}/>
        {/* <button onClick={()=>setName("Jayswal")}>Chnage Name</button> */}
    </div>
  )
}

export default ParentProps
