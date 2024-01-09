import logo from './logo.svg';
import './App.css';
import FetchApi from './component/FetchApi';
import StateP from './component/StateInFunction';
import StateInClass from './component/StateInClass';
import Forms from './component/Forms';
import ParentProps from './component/ParentProps';
import InlineExpression from './component/InlineExpression';
import EventHandling from './component/EventHandling';
import Keys from './component/Keys';
import DynamicInputs from './DynamicInputs';
import CssInReact from './CssInReact';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      {/* innerHTML in react  */}

      {/* 7. forms in react  */}
      {/* <Forms/> */}
      {/* 6. keys in react  */}
      {/* <Keys /> */}
      {/* 5. event handling in react  */}
      {/* <EventHandling/> */}
      {/* 4. Inline conditional expressions */}
      {/* <InlineExpression/> */}
      
      {/* 3 props */}
      {/* <ParentProps /> */}
      {/* <Forms/> */}
      {/* <StateInClass/> */}
      {/* <StateP/> */}
      {/* <FetchApi/> */}

      {/* 8. Dynamic Inputs in react  */}
      <DynamicInputs />

      {/* 9. CSS STYLES IN REACT  */}
      <CssInReact /> 

    </div>
  );
}

export default App;
