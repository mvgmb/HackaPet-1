import React from 'react';
import ReactDOM from 'react-dom';
import LeftScreen from './LeftScreen/LeftScreen.js';
import json from './description.json';
import RightScreen from "./RightScreen/RightScreen.js";
import './index.css';

//imagens aqui
let imagemPerfil = require('./coala.jpg');
let imagemEstrela = require('./stars.png');
let imagemQualquer = " ";
let imagemProf = require('./prof.jpg');

const getClass = () => {
  return {
    left: {
      name: "Compiladores",
      descricao: json.text,
      professores: [{nome:"Leopoldo",img: {src: imagemProf, name: "Leopoldo"}}],
      files : []
    },
    right: {
      vale: 1,
    rightC : {
      imgs : [{src: imagemPerfil, name:"test"},
              {src: imagemEstrela , name:"test"},
              {src: imagemQualquer, name : "teste"}],
      text : 'Cadeira muito TOP!!! Amei as aulas e achei o professor muito instrutivo, sempre ajudando nas horas difíceis.',
      info : '2018.2 Leopoldo Afonso',
      name : 'Sheila Vitoria',
      login : '@svgm3',
      inp: {accept: ".pdf", v: false},
    },

    rightL : {
      inp: {accept: ".pdf", v: false},
      link: [{ref: "https://www.l2f.inesc-id.pt/~david/w/pt/Compiladores", nome: "Compiladores"}]
    },

    rightF : {
      inp : {accept: ".pdf",v:true}
    }
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