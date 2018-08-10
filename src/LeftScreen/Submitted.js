/*
    Aqui fica um resumo meio que oficial, pode ser que ele seja o com maior nota dos usuários
    pode ser um submetido por nós mesmos
*/

import React from 'react';
import ReactDOM from 'react-dom';

let imagemPdf = require('../images/iconPdf.png');

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
                    <a href = {this.state.files[0].src} download> <img src={imagemPdf} /> </a>
                    <div>
                        <p> {this.state.files[0].name} </p>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Submitted;