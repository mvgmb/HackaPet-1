import React from 'react';
import ReactDOM from 'react-dom';
//é a input que vai receber a entrada.
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            accepti: props.inp.accept
        };

    }
    render(){
        return (
            <div>
                <input className="userArchieveUP" type="file" accept={this.state.accepti}>
                </input>
                <input className="userCommmitUP" type="text"></input>
            </div>
        );
    }
}

export default Input;