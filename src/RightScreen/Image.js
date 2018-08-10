import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            src: props.img.src
        };
        console.log(this.state);

    }
    render(){
        return (
            <img className="userImage" src={this.state.src} name={this.state.name}>
            </img>
        );
    }
}

export default Image;