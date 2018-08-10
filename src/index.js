import React from 'react';
import ReactDOM from 'react-dom';
import LeftScreen from './LeftScreen/LeftScreen.js';
import json from './description.json';
import RightScreen from "./RightScreen/RightScreen.js";

let a = require('./coala.jpg');

const getClass = () => {
  return {
    name: "Compiladores",
    descricao: json.text,
    professores: ["Leopoldo", "Luca"],
    files : [],
    img : {src: a, name:"test"}
  }
}

class Screen extends React.Component {
  render() {
    
    return (
      <div className="containerMain">
        <RightScreen course={getClass()}/>
         <LeftScreen course={getClass()}/>
      </div>
    )
  }
}


// ========================================

ReactDOM.render(
  <Screen />,
  document.getElementById('root')
);
<<<<<<< HEAD

=======
>>>>>>> 99977ec7c97f5fde3a7190a64b526b298ada80b3
