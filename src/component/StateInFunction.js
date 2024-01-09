import React, { useCallback, useState } from 'react'

function StateP() {
    const [num, setNum] = useState(0);
    //string state
    const [name, setName] = useState('');
    //boolean state
    const [isVisibale, setIsVisibe] = useState('false');

    //aaray state
    const [array, setArray] = useState([
        {
            name:"ANNY",
            age:23
        },
        {
            name:"Tomm",
            age:17,
        }
    ])
    //object state
    const [object, setObject] = useState({
        name:'Anny',
        age:26,
    })
    // let count=0;
    const increment = () => {
        // num =num +1;
        // console.log(num);
        setNum(num + 1);
        setIsVisibe(!isVisibale);
        setName("Anjali")

        // setNum(a++);

    }
    return (
        <div className='card'>

            <div className='card-inner'>
                <h1>{num}</h1>
                <h4>{name}</h4>
                  {isVisibale ? <h1>Visible</h1> : <h1>Not visible</h1>}  

                <button onClick={increment}>Increment</button>
            </div>

        </div>
    )
}

export default StateP
