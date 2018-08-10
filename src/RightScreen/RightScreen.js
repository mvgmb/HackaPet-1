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
import Submited from './Submited.js';

class RightScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        if(this.props.course.vale==1){
            this.state = {
                Userbox : {
                    imgs : this.props.course.rightC.imgs,
                    text: this.props.course.rightC.text,
                    info: this.props.course.rightC.info,
                    name: this.props.course.rightC.name,
                    login: this.props.course.rightC.login
                },
    
                
            }
        }
        else if(this.props.course.vale==2){
            this.state={
                filebox:{

                },
                Input : {
                    inp: this.props.course.inp
                }
            }
        }else if(this.props.course.vale==3){
            this.state={
                Linkbox : {
                    ref: this.props.course.rightC.link.ref,
                    nome: this.props.course.rightC.link.nome
                },
                Input : {
                    inp: this.props.course.inp
                }
            }
        }else{
            console.log("deu merda");
        }
        
    
    }

    render() {
        return (
            <div className="rightScreen">
                <FilterBox/>
                <Box/>
                <Submited/>
            </div>
        )
    }
}

export default RightScreen;