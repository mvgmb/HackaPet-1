import React from 'react';
import ReactDOM from 'react-dom';
import LeftScreen from './LeftScreen/LeftScreen.js';
import cu from './description.json'

const getClass = () => {
  return {
    name: "Compiladores",
    descricao: cu.text,
    professores: ["Leopoldo", "Luca"],
    files : []
  }
}

class Screen extends React.Component {
  render() {
    
    return (
      <div className="containerMain">
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
