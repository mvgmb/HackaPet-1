import React from 'react';
import ReactDOM from 'react-dom';
import LeftScreen from './LeftScreen/LeftScreen.js';
import json from './description.json';
import RightScreen from "./RightScreen/RightScreen.js";
import './index.css';

//imagens aqui
let imagemPerfil = require('./coala.jpg');
let imagemEstrela = " ";
let imagemQualquer = " ";

const getClass = () => {
  return {
    left: {
      name: "Compiladores",
      descricao: json.text,
      professores: ["Leopoldo"],
      files : []
    },
    right : {
      imgs : [{src: imagemPerfil, name:"test"},{src: imagemEstrela , name:"test"},{src: imagemQualquer, name : "teste"}],
      text : 'qlqr merda ai',
      info : 'qlqr merda ai',
      username : 'qlqr merda ai',
      login : 'qlqr merda ai'

    }
    
  }
}

class Screen extends React.Component {
  render() {
    
    return (
      <div className="containerMain">
        <LeftScreen course={getClass().left}/>
        <RightScreen course={getClass().right}/>
      </div>
    )
  }
}


// ========================================

ReactDOM.render(
  <Screen />,
  document.getElementById('root')
);
