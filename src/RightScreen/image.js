import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.nome,
            src: props.source
        };

    }
    render(){
        return (
            <img src={this.state.src} name={this.state.name}>
            </img>
        );
    }
}

export default Image;