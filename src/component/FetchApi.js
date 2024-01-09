import React, { useEffect, useState } from 'react'

function FetchApi() {
    const [users, setUsers] =  useState([]);
    const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10]);
    const url = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);
    const mapData = ()=>{
        // let mappedArray = users.map((user)=>user.id*2);
        // console.log(mappedArray);
        let filterData = users.filter((user)=>{
            // return user.username === "Bret";
            // return user.name.includes("a");
            return user.id >5 ;
        })
        // console.log(filterData);
        setUsers(filterData);
    }
    const mapData1 = ()=>{
        let filterData = numbers.filter((num)=>{
            return num >6;
        }).map((filter)=>{
            return filter+1;
        })
        setNumbers(filterData);
    }
    return (
      <>
        <div className="App">
          <h1>Users</h1>
          <div className="card">
            {users.map((user) => (
              <div className="card-inner">
                <p>{user.name}</p>
                <p>{user.username}</p>
               
              </div>
            ))}
          </div>
          <button onClick={mapData}>Filter data</button>
          <div className="card">
          {numbers.map((num)=>(
            <div className="card-inner">
                <p>{num}</p>
                {/* <p>{user.username}</p> */}
               
              </div>
          ))}
          </div>
          
          <button onClick={mapData1}>Filter data</button>
          
        </div>
      </>
    );
  }

export default FetchApi
