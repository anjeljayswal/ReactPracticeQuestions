import React, { useState } from 'react'
import "./App.css"
const styles={
    internal:{
        color:'blue',
    },
    dark:{
        backgroundColor:'white',
        color:'black',
    },
    light:{
        backgroundColor:'black',
        color:'white',
        // fontSize: 40,
    },
}

function CssInReact(){
    const [theme, setTheme] = useState(false);
    const toggleTheme = ()=>{
        setTheme(!theme);

    }
    
  return (
    <>
    <div className='App'>
        <h1 className='external'>External Ssyling</h1>

        {/* <h1 style={styles.internal} >Internal Styling</h1> */}
        <h1 style={theme ?styles.light : styles.dark } >Internal Styling</h1>

        <h1 style={{color:'green', backgroundColor:'black'}}>Inline Styling</h1>

        <button onClick={toggleTheme}>Toggle Theme</button>
      
    </div>
    <div className='App' style={theme ? styles.light : styles.dark}>
        <h1 className='external'> External Ssyling</h1>
        
        <h1 >Internal Styling</h1>

        <h1 style={theme ? {color:'pink', backgroundColor:'purple'}:{color:'purple', backgroundColor:'pink'}}>Inline Styling</h1>

        <button onClick={toggleTheme}>Toggle Theme1</button>
      
    </div>
    </>
  )
}

export default CssInReact
