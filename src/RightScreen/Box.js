
import React from 'react';
import ReactDOM from 'react-dom';
import Userbox from './Userbox';


class Box extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            decideVale : this.props.vale
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