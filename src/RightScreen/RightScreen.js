/*
    Aqui tudo que você for fazer na parte direita da tela

*/


import React from 'react';
import ReactDOM from 'react-dom';
import Userbox from './Userbox.js';
import Filebox from './Filebox.js';
import FilterBox from './FilterBox.js';
import Linkbox from './Linkbox.js';
import Input from './Input.js';
import Submited from './Submited.js'

class RightScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            Userbox : {
                imgs : this.props.course.imgs,
                text: this.props.course.text,
                info: this.props.course.info,
                name: this.props.course.name,
                login: this.props.course.login
            },

            Linkbox : {
                ref: this.props.course.link.ref,
                nome: this.props.course.link.nome
            },

            Filebox : {

            },
            Input : {
                inp: this.props.course.inp
            }
        }
    
    }

    render() {
        return (
            <div className="rightScreen">
                <FilterBox/>
                <Userbox userbox={this.state.Userbox} />
                <Linkbox linkbox={this.state.Linkbox}/>
                <Linkbox linkbox={this.state.Linkbox}/>
                <Linkbox linkbox={this.state.Linkbox}/>
                <Linkbox linkbox={this.state.Linkbox}/>
                <Linkbox linkbox={this.state.Linkbox}/>
                
                <Filebox filebox = {this.state.Filebox}/>
                <Input inp={this.state.Input}/>
                <Submited/>
            </div>
        )
    }
}

export default RightScreen;