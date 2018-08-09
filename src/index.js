import React from 'react';
import ReactDOM from 'react-dom';
import LeftScreen from './LeftScreen/LeftScreen.js';

const getClass = () => {
  return {
    name: "AVLC",
    descricao: "Essa cadeira é foda"
  }
}

class Screen extends React.Component {
  render() {
    return (
      <LeftScreen course={getClass()}/>
    )
  }
}


// ========================================

ReactDOM.render(
  <Screen />,
  document.getElementById('root')
);
