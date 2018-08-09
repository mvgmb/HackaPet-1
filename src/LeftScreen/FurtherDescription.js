/*
    Qualquer coisa que precisar extra na página da cadeira


*/

import React from 'react';
import ReactDOM from 'react-dom';


class FurtherDescription extends React.Component{
    constructor(props){
        super(props);
        this.course = props.course;
        this.state = {
            Professor: this.props[0],
            Classes: []
        };
    }

    render(){
        return (
            <div> 
                {this.state.files}
            </div>
        )
    }
}