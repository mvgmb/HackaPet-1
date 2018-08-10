/*
    A caixinha que tem o usuário, o comentário dele, a nota dele, etc
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Image from "./Image.js";
import Description from './Description.js';
import UserName from './UserName.js';

  class Userbox extends React.Component{
    constructor(props){
        super(props);
        this.state = props.Userbox;
    }

    render(){
        return (
            <div class="userBox">
                <Image img={this.state.imgs[0]} name="photoProfile"> </Image>
                <UserName name={this.state.name} login={this.state.login}> </UserName>
                <Image img={this.state.imgs[1]} name="stars"> </Image>
                <Description text={this.state.text} info={this.state.info}> </Description>
            </div>
        );
    }
  }

  export default Userbox;