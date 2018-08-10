import React from 'react';
import ReactDOM from 'react-dom';

//é a input que vai receber a entrada.

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            accepti: props.inp.inp.accept,
            a: props.inp.inp.v
        };

    }
    render(){
        if(this.state.a){
            return (<input className="userArchieveUP" type="file" accept={this.state.accepti}>
            </input>);
        }
        else
            return (
                <input className="userCommmitUP" type="text"></input>
        );
    }
}

export default Input;