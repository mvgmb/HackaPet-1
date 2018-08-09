import React from 'react';
import ReactDOM from 'react-dom';

class UserName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            login: props.login
        };

    }
    render(){
        return (
            <h3> {this.state.name} </h3>
            <h4> {this.state.login} </h4>
        );
    }
}

export default UserName;