import React from 'react';
import ReactDOM from 'react-dom';

class Stars extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: fiveStars,
            src: src/images/fiveStars.png
        };

    }
    render(){
        return (
            <img src={this.state.src} name={this.state.name}>
            </img>
        );
    }
}

export default Stars;