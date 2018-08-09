/* 
Essa é a descrição da cadeira que vai ter
    Aqui temos
        .Algumas informações sobre a cadeira
        .A ementa da cadeira
        .Um pdf com um resuminho simples
        (podemos pegar o melhor avaliado, mas por enquanto pega um meu pronto)

*/


import React from 'react';
import ReactDOM from 'react-dom';

class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            descricao : props.descricao,
        };
    }

    render(){
        return (
            <p> {this.state.descricao} </p>
        )
    }
}

export default Description;