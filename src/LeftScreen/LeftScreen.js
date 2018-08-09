/*
    Isso aqui vai puxar tudo que agt botar na parte esquerda da tela

*/

import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name.js';
import Description from './Description.js';
import FurtherDescription from './FurtherDescription.js';

class LeftScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name : props.course.name,
            descricao : props.course.descricao,
            professores : props.course.professores[1]
        }
    
    }

    render() {
        return (
            <div className="leftScreen">
                <div className="containerName" >
                    <Name name={this.state.name} />
                </div>
                <div className="containerDesc" >
                    <Description descricao={this.state.descricao} />
                </div>
                <div>
                    <FurtherDescription professores={this.state.professores} />
                </div>
            </div>
        )
    }
}

export default LeftScreen;