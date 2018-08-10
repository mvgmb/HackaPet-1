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
            user: props.user,
            text: props.text,
            info: props.info,
            prof: props.prof,
            a: [{
                    name : props.img[0].name,
                    src: props.img[0].src
             },
            {       name: props.img[1].name,
                    src: props.img[1].src
            }]
        };
            
    }


    render(){
        return (
            <div>
                <Image src={this.state.a[0].src} name="photoProfile"> </Image>
                <Description text={this.state.text} prof={this.state.prof}> </Description>
                <UserName user={this.state.user} info={this.state.info}> </UserName>
                <Image src={this.state.a[1].src} name="stars"> </Image>
                <div> <h2>FILE</h2> </div>
            </div>
        );
    }
  }

  export default Userbox;