import React, { Component } from 'react'

export default class StateInClass extends Component {
    constructor(){
        super();
        this.state={
            name:'Anny',
            age:1,
            array:[1,2,3,4,5,6],
        }
    }
    changeStatus=()=>{
        this.setState({
            age:this.state.age*2,
            name:'jeen'
        
        });
    }
  render() {
    
    return (
      <div className='card-inner'>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>

        {/* {this.state.array.map((item)=>item*item)} */}
        <button onClick={this.changeStatus}>Change Stste</button>
        
      </div>
    )
  }
}
