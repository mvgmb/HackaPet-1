import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component{
    constructor(props){
        super(props);
        
        console.log("!!!" + Object.keys(props).join(''));
        this.state = {
            src: props.img.src
        };
        console.log(this.state);

    }
    render(){
        return (
            <img src={this.state.src} name={this.state.name}>
            </img>
        );
    }
}

export default Image;