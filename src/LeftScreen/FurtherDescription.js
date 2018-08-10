/*
    Qualquer coisa que precisar extra na página da cadeira


*/

import React from 'react';
import ReactDOM from 'react-dom';


class FurtherDescription extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            professores : props.professores
        };

    }

    render(){
        return (
           <div className="furtherDesc">
               <img/>
                <p className="professor"> {this.state.professores}</p>
                <img/>
            </div> 
        )
    }
}

export default FurtherDescription;