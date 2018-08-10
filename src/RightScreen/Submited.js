import React from 'react';
import ReactDOM from 'react-dom';


class Submited extends React.Component{

    handleClick() {
        return <div> Submeta um arquivo! </div>
      }
    
    render(){
        return (
            <button onClick={(e) => this.handleClick(e)} > + </button>
        )
    }
}

export default Submited;