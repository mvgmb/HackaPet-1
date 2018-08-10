import React from 'react';
import ReactDOM from 'react-dom';
import LeftScreen from './LeftScreen/LeftScreen.js';
import json from './description.json';
import RightScreen from "./RightScreen/RightScreen.js";

let UserImage = require('./coala.jpg');
let Stars = require('./stars.png');

const getClass = () => {
  return {
    name: "Compiladores",
    descricao: json.text,
    professores: ["Leopoldo", "Luca"],
    files : [],
    img : [{src: UserImage, name:"test"}, {src: Stars, name:"test"}]
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