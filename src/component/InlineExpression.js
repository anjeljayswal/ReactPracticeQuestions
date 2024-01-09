import React, { useEffect } from 'react'

const InlineExpression = () => {
    let age=25;
    let name= "Ram";
    useEffect(()=>{
        // let age=25;
        // let name= "Ram";
        // if(age >25){
        //     console.log("You are now old");
        // }else if(name === "Ram" && age === 25){
        //     console.log("I am 25 years old");
        //     console.log("Ram is my Name");
        // }else{
        //     console.log("Ram is not my Name");
        //     console.log("I am less tham 25 years old");
        // }

        age > 25 ? (
             console.log("You are now old") //false
        ):
        name === "Ram" && age === 25 ? ( //true
            <>
               {console.log("I am 25 years old")}
                {console.log("Ram is my Name") }
            </>
        ):(
           <>
           { console.log("Ram is not my Name")}
            {console.log("I am less tham 25 years old")}
           </> 
        )
    },[])
  return (
    <div>
        {age > 25 ? (
            <h1>You are now old</h1>
             
        ):
        name === "Ram" && age === 25 ? ( //true
            <>
            <h1>I am 25 years old</h1>
            <h1>Ram is my Name</h1>
               
            </>
        ):(
           <>
           <h1>Ram is not my Name</h1>
           <h1>I am less tham 25 years old</h1>           
           </> 
        )}
    </div>
  )
}

export default InlineExpression
