/*
    A caixinha que tem o usuário, o comentário dele, a nota dele, etc


*/

import React from 'react';
import ReactDOM from 'react-dom';
import Image from "./Image.js";
import Description from './Description.js';
import UserName from './UserName';

  class Userbox extends React.Component{
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
                <Image src={this.state.src} name="photoProfile"> </Image>
                <Description text={this.state.text} info={this.state.info}> </Description>
                <UserName name={this.state.name} info={this.state.name}> </UserName>
                <Image src={this.state.src} name="stars"> </Image>
                <div> <h2>FILE</h2> </div>
            </div>
        );
    }
  }

  export default Userbox;