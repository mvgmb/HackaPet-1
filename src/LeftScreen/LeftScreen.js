/*
    Isso aqui vai puxar tudo que agt botar na parte esquerda da tela

*/

import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name.js';
import Description from './Description.js';


class LeftScreen extends React.Component {

    constructor(props) {
        super(props);
        this.course = props.course;
    }

    renderName() {
        return <Name name={this.course.name} />;
    }
    renderDescription() {
        return <Description descricao={'Essa cadeira é loca'} />
    }

    render() {
        return (
            <div>
                <div>
                    <Name name={this.course.name} />
                </div>
                <div>
                    {this.renderDescription()}
                </div>
            </div>
        )
    }
}

export default LeftScreen;