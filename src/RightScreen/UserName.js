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
            <div>
                <div> {this.state.name} </div>
                <div> {this.state.login} </div>
            </div>
        );
    }
}

export default UserName;