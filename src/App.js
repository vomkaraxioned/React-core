import './App.css';
import React from "react";
import {useState,useEffect} from "react";

/* componenet using class  */
// class App extends React.Component{
//   constructor(props){
//     super();
//     this.state = {name:props.name};
//   }

//   render() {
//    return (<h1>hii {this.state.name}</h1>);
//   }

// }

/* component using function */
const App = (props)=>{
  const [state,setState] = useState(props.count),
   changeState = ()=>setState(new Date().toLocaleTimeString());
  setInterval(changeState,5000);
  useEffect(()=>console.log(state),[state]);
  return (<h1>{state}</h1>);
};

export default App;
