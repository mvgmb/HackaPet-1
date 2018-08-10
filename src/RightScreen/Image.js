import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            src: props.img.src
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