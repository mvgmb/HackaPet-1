/*
    Aqui tudo que você for fazer na parte direita da tela

*/


import React from 'react';
import ReactDOM from 'react-dom';
import Userbox from './Userbox.js';

class RightScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            user: props.course.user,
            text: props.course.text,
            info: props.course.info,
            prof: props.course.prof,
            a: [{
                    name : props.course.img[0].name,
                    src: props.course.img[0].src
             },
            {       name: props.course.img[1].name,
                    src: props.course.img[1].src
            }]

        }
    
    }

    render() {
        return (
            <div className="rightScreen">
                <Userbox 
                        user={this.state.user} text={this.state.text} 
                        info={this.state.info} prof={this.state.prof} 
                        a={this.state.a} >
                </Userbox>
            </div>
        )
    }
}

export default RightScreen;