/*
    Qualquer coisa que precisar extra na página da cadeira


*/

import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../RightScreen/Image.js';

class FurtherDescription extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            professores : props.professores
        };

    }

    render(){
        console.log(this.state.professores);
        return (
           <div className="furtherDesc">
               <img/>
                <p className="professor"> {this.state.professores.nome}</p>
                <Image img={this.state.professores.img} name="profImg" width="300px" height="300px"></Image>
            </div> 
        )
    }
}

export default FurtherDescription;