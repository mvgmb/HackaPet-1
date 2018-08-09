/*
    Aqui é o nome da cadeira e possivelmente a nota

*/


import React from 'react';
import ReactDOM from 'react-dom';

  class Name extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            name : props.name
        };
    }
    render(){
        return (
            <h1 className="name" onClick={() =>
                alert("click")} >
            {this.state.name}
             </h1>

        );
    }
  }

  export default Name;