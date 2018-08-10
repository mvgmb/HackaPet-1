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
        this.state = {
            Userbox : props.Userbox 
        }
    }

    render(){
        return (
            <div>
                {this.state.Userbox.map(arr => (
                    <div class="userBox">
                        <Image img={arr.imgs[0]} name="photoProfile"> </Image>
                        <UserName name={arr.name} login={arr.login}> </UserName>
                        <Image img={arr.imgs[1]} name="stars"> </Image>
                        <Description text={arr.text} info={arr.info}> </Description>
                    </div>
                ))}
            </div>
        );
    }
  }

  export default Userbox;