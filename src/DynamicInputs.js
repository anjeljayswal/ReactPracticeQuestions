import React, { useState } from 'react'

 function DynamicInputs() {
    const [inputs, setInputs] = useState({});

    const getInputValues =(data)=>{
        // console.log(data.target.value);
        let { name, value } = data.target;
        // console.log(name);
        let inp = { [name]:value};
        // console.log(inp);
        setInputs({ ...inputs, ...inp })
    };
    console.log(inputs);
  return (
    <div className='App'>
        <div className=''>
            <input type="text" onChange={getInputValues} name="name" id="" placeholder='Name' />
            <input type="text" onChange={getInputValues} name="age" id="" placeholder='Age' />
            <input type="text" onChange={getInputValues} name="yoe" id=""  placeholder='Years of experience'/>

        </div>
        <button>Add new gropus</button>
      
    </div>
  )
}
export default DynamicInputs;
