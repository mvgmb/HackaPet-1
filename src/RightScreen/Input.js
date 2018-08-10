import React from 'react';
import ReactDOM from 'react-dom';

//é a input que vai receber a entrada.

class Input extends React.Component{
    constructor(props){
        console.log("input");
        console.log(props);

        super(props);
        this.state = {
             in: props.inp
        };
        

    }
    render(){
        if(this.state.in.v){
            return (<input className="userArchieveUP" type="file" accept={this.state.in.accept}>
            </input>);
        }
        else
            return (
                <input className="userCommmitUP" type="text"></input>
        );
    }
}

export default Input;