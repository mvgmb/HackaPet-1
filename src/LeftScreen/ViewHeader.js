/*
    Aqui é oque escolhe se você tá vendo o geral, só os comentários, só os links, só os arquivos


*/


import React from 'react';
import ReactDOM from 'react-dom';


class ViewHeader extends React.Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
            labelName : props.labelName
        }

    }

    render(){
        return (
            <div className="nav"> 
                <label for="comentariosBtn">{this.state.labelName}</label>
                <button id="comentariosBtn" name="comentariosBtn"></button>
            </div>
        )
    }
}

export default ViewHeader;