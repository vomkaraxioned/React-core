import './App.css';
import React from "react";
import {useState} from "react";

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
  return (<h1>{props.name}</h1>);
};

export default App;
