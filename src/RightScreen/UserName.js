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
            <div class="containerNameLogin">
                <div class="userName"> {this.state.name} </div>
                <div class="userLogin"> {this.state.login} </div>
            </div>
        );
    }
}

export default UserName;