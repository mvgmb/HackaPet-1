/*
    Isso aqui vai puxar tudo que agt botar na parte esquerda da tela

*/

import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name.js';
import Description from './Description.js';
import FurtherDescription from './FurtherDescription.js';
import ViewHeader from './ViewHeader.js';
import Submitted from './Submitted.js';

class LeftScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name : props.course.name,
            descricao : props.course.descricao,
            professores : props.course.professores[0],
            files : props.course.files
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
                <div className="containerFiles">
                    <Submitted files={this.state.files }/>
                </div>
                <div>
                    <FurtherDescription professores={this.state.professores} />
                </div>
                <div>
                    <div className="comentarioBtn">
                        <ViewHeader labelName = "Comentarios" />
                    </div>
                    <div className="arquivosBtn">
                        <ViewHeader labelName = "Arquivos" />
                    </div>
                    <div className="linksBtn">
                        <ViewHeader labelName = "Links" />
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftScreen;