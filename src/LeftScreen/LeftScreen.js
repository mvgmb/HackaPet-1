/*
    Isso aqui vai puxar tudo que agt botar na parte esquerda da tela

*/

import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name.js';
import Description from './Description.js';


  class LeftScreen extends React.Component{
    renderName(){
        return <Name name = {'AVLC'} />;
    }
    renderDescription(){
        return <Description descricao = {'Essa cadeira é loca'} />
    }
    render(){
        return (
            <div>
               {this.renderName()}
               {this.renderDescription()}
            </div>
        ) 
    }
  }

  export default LeftScreen;