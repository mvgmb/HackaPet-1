import React from 'react';
import ReactDOM from 'react-dom';

class UserName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.nome,
            login: props.login
        };

    }
    render(){
        return (
            <div>
                <h3> {this.state.name} </h3>
                <h4> {this.state.login} </h4>
            </div>
        );
    }
}

export default UserName;