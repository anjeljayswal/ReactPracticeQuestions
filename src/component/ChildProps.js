import React from 'react'

const ChildProps = ({valuOfProp, changeName }) => {
  return (
    <div className='card'>
      <h1>{valuOfProp}</h1>
      <button onClick={changeName}>Parent To Child</button>
      <button onClick={()=>changeName("Gita")}>Child To Parent</button>
    </div>
  )
}

export default ChildProps
