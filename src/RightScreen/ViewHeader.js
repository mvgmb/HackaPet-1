/*
    Aqui é oque escolhe se você tá vendo o geral, só os comentários, só os links, só os arquivos


*/


import React from 'react';
import ReactDOM from 'react-dom';


class ViewHeader extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            click : props.onClick,
            labelName : props.labelName
        }

    }

    render(){
        return (
            <div className="nav" onClick={this.state.click}> 
                <label  for="btn">{this.state.labelName}</label>
                <button  id="btn" name="btn"></button>
            </div>
        )
    }
}

export default ViewHeader;