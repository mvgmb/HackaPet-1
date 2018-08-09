import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



  class Name extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            name : props.name
        };
    }

    render(){
        return (
            <h1 className="name" onClick={() =>
                alert("click")} >
            {this.state.name}
             </h1>

        );
    }
  }

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
  