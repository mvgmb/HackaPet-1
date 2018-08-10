/*
    Aqui tudo que você for fazer na parte direita da tela

*/


import React from 'react';
import ReactDOM from 'react-dom';
import Userbox from './Userbox.js';
import Image from "./Image.js";

class RightScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            img: props.course.img  
        }
    
    }

    render() {
        return (
            <div className="rightScreen">
                <Image img={this.state.img}></Image>
            </div>
        )
    }
}

export default RightScreen;