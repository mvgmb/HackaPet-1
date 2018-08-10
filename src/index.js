import React from 'react';
import ReactDOM from 'react-dom';
import LeftScreen from './LeftScreen/LeftScreen.js';
import cu from './description.txt'

const getClass = () => {
  return {
    name: "Compiladores",
    descricao: cu,
    professores: ["Leopoldo", "Luca"],
    files : [],
    img : {src:"Oi!", name:"test"}
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
>>>>>>> 8738701e5c489f84ec52ea151b9e956924321b7e
