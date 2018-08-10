
import React from 'react';
import ReactDOM from 'react-dom';
import Userbox from './Userbox';


class Box extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            decidedefinirTelaDireita : this.props.definirTelaDireita
        };

    }


    render(){
        return (
            <div>
                decide();
            </div>    
        );
    }
}

export default Box;