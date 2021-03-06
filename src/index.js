import React from 'react';
import ReactDOM from 'react-dom';
import LeftScreen from './LeftScreen/LeftScreen.js';
import json from './jsonData/description.json';
import RightScreen from "./RightScreen/RightScreen.js";
import './index.css';

/* Images */
let imagemPerfil = require('./images/coala.jpg');
let imagemEstrela = require('./images/stars.png');
let imagemProf = require('./images/prof.jpg');

let mapping = { 'comentarioDosAlunos' : 1, 'Links' : 2, 'Arquivos' : 3};

const getCurrentCourse = () => {
  /* Isso retornaria da DataBase */
  return {
    //A parte esquerda da tela
    left: {

      name: "Compiladores",
      descricao: json.text,
      professores: [{nome:"Leopoldo",img: {src: imagemProf, name: "Leopoldo"}}],
      files : [{src: imagemEstrela, name: "Melhor PDF"}]
    },

    //A parte direita da tela
    right: {
      definirTelaDireita: mapping['comentarioDosAlunos'],

    
    comentariosDosAlunos : {
      comentarios : [
              {imgs : [{src: imagemPerfil, name:"test"},
                      {src: imagemEstrela , name:"test"}],
              text : 'Cadeira muito TOP!!! Amei as aulas e achei o professor muito instrutivo, sempre ajudando nas horas difíceis.',
              info : '2018.2 Leopoldo Afonso',
              name : 'Sheila Vitoria',
              login : '@svgm3'},
              {imgs : [{src: imagemPerfil, name:"test"},
              {src: imagemEstrela , name:"test"}],
              text : 'Cadeira muito TOP!!! Amei as aulas e achei o professor muito instrutivo, sempre ajudando nas horas difíceis.',
              info : '2018.2 Leopoldo Afonso',
              name : 'Sheila Vitoria',
              login : '@svgm3'}
              ],
      inp: {accept: ".pdf", v: false},
    },

    Links : {
      inp: {accept: ".pdf", v: false},
      link: [{ref: "https://www.l2f.inesc-id.pt/~david/w/pt/Compiladores", nome: "Compiladores"},{ref: "https://github.com/", nome: "GitHub"},{ref: "https://www.freecodecamp.org/", nome: "CodeCamp"},{ref: "https://www.google.com/", nome: "Google"} ]
    },

    Arquivos : {
        inp : {accept: ".pdf",v:true},
        pdfs : [{ref: imagemEstrela, name : "Parsing"}, {ref : imagemEstrela, name: "LR1"}, {ref : imagemEstrela, name: "LR1"}, {ref : imagemEstrela, name: "LR1"}]
    }
  }
  }
}

class Screen extends React.Component {
  render() {
    
    return (
      <div className="containerMain">
        <LeftScreen course={getCurrentCourse().left}/>
        <RightScreen course={getCurrentCourse().right}/>
      </div>
    )
  }
}


// ========================================

ReactDOM.render(
  <Screen />,
  document.getElementById('root')
);