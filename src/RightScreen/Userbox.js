/*
    A caixinha que tem o usuário, o comentário dele, a nota dele, etc


*/

import React from 'react';
import ReactDOM from 'react-dom';

  class UserBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : props.img.name,
            src: props.img.src,
        };
    }



    render(){
        return (
            <div>
                <Image src={this.state.src} name=""/>
                {this.renderImage()}
                {this.renderUserName()}
                {this.renderDescription()}
                {this.renderfile()}
                {this.renderStars()}
            </div>
        );
    }
  }

  export default Userbox;
