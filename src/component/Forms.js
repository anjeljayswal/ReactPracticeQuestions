import React, { useState } from 'react'

function Forms() {
    const [objData, setObjData] = useState({});
    const getInput = (value, name) => {
        // console.log(value);
        // console.log(name);
        // console.log({ [name]: value })
        let data = { [name]: value };
        setObjData({ ...objData, ...data });

    }
    // console.log(objData);
    const submit = (event) => {
        event.preventDefault();
        console.log(objData);
    }

    return (
        <form onSubmit={submit}>
            <div className='form'>
                <div className='inner-div'>
                    <input type="text" name="name" id=""
                        placeholder='Write you name..'
                        onChange={(event) => getInput(event.target.value, event.target.name)}

                    />
                </div>
                <div className='inner-div'>
                    <input type="number" name="age" id=""
                        placeholder='Write you Age..'
                        onChange={(event) => getInput(event.target.value, event.target.name)}

                    />
                </div>
                <div className='inner-div'>
                    <input type="text" name="hobbies" id=""
                        placeholder='Write you Hobbies..'
                        onChange={(event) => getInput(event.target.value, event.target.name)}

                    />
                </div>
                <div className='inner-div'>
                    <input type="date" name="date" id=""
                        placeholder='Write you Date..'
                        onChange={(event) => getInput(event.target.value, event.target.name)}

                    />
                </div>
                <button type='submit' >Submit</button>
                <button type='reset'>Reset</button>



            </div>

        </form>

    )
}
export default Forms;

