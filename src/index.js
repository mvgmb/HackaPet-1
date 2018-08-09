import React from 'react';
import ReactDOM from 'react-dom';
import LeftScreen from './LeftScreen/LeftScreen.js';

  class Screen extends React.Component{
    render(){
        return (
            <LeftScreen/>
        )
    }
  }
  
  
  // ========================================
  
  ReactDOM.render(
    <Screen />,
    document.getElementById('root')
  );
  