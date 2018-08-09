/*
    Isso aqui vai puxar tudo que agt botar na parte esquerda da tela

*/

import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name.js';


  class LeftScreen extends React.Component{
    renderName(){
        return <Name name = {'AVLC'} />;
    }
    render(){
        return (
            <div>
               {this.renderName()}
            </div>
        ) 
    }
  }

  export default LeftScreen;