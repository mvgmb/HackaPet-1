/*
    Aqui fica um resumo meio que oficial, pode ser que ele seja o com maior nota dos usuários
    pode ser um submetido por nós mesmos
*/

import React from 'react';
import ReactDOM from 'react-dom';


class Submitted extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            files : this.props.files,
        };
    }

    render(){
        return (
            <div className="containerFiles"> 
                <div className="namepdf">
                    <label for="" className="fileLabel"></label>
                    {this.state.files}
                    <p>noaaaaaaaaaaaaaaaaaaaaame.pdf</p>
                </div>
            </div>
        )
    }
}

export default Submitted;