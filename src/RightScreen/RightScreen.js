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
import PropTypes from 'prop-types';
import ViewHeader from './ViewHeader';


class RightScreen extends React.Component {

    constructor(props) {
        super(props);
        
        if(this.props.course.definirTelaDireita==1){
            this.state = {
                Userbox : this.props.course.comentariosDosAlunos.comentarios,
                Input : {
                    inp: this.props.course.comentariosDosAlunos.inp
                },
                definirTelaDireita : this.props.course.definirTelaDireita
            }
        }
        else if(this.props.course.definirTelaDireita==2){
            this.state ={
                Filebox : this.props.course.Arquivos.pdfs,
                Input : {
                    inp: this.props.course.Arquivos.inp
                },
                definirTelaDireita : this.props.course.definirTelaDireita
            }
        }else if(this.props.course.definirTelaDireita==3){
            this.state ={
                Linkbox : this.props.course.Links.link,
                Input : {
                    inp: this.props.course.Links.inp
                },
                definirTelaDireita : this.props.course.definirTelaDireita
            }
        }else{
            console.log("deu merda");
        }
        console.log(this.state);
    }

    decide = function(){
        switch(this.state.definirTelaDireita){
            case 1:
                return  <div className="rightContent">
                             <Userbox Userbox={this.state.Userbox}  />
                        </div>
            case 2:
                return <div className="rightContent">
                            <Filebox Filebox={this.state.Filebox} />
                        </div>
            case 3:
                return <Linkbox className="rightContent" Linkbox={this.state.Linkbox} />
            default:
                console.log("Deu merda no switch-case");
        }
    }

    
    render() {
        return (
        <div className="rightScreen">
                <div id="comentarioBtn" className="navBtn" onClick={()=>{
                
                    this.setState(() => {
                        return {
                            Userbox : this.props.course.comentariosDosAlunos.comentarios,
                            Input : {
                                inp: this.props.course.comentariosDosAlunos.inp
                            },
                            definirTelaDireita : 1
                        };
                    });
  
  
                }}>
                    <ViewHeader labelName = "Comentarios" />
                </div>
                <div id="arquivosBtn" className="navBtn" onClick={()=>{
                     this.setState(() => {
                        return {
                            Filebox : this.props.course.Arquivos.pdfs,
                            Input : {
                                inp: this.props.course.Arquivos.inp
                            },
                            definirTelaDireita : 2
                        };
                    });
                }} >

                    <ViewHeader labelName = "Arquivos"/>
                </div>

                <div id="linksBtn" className="navBtn" onClick={()=>{
                     this.setState(() => {
                        return {
                            Linkbox : this.props.course.Links.link,
                            Input : {
                                inp: this.props.course.Links.inp
                            },
                            definirTelaDireita : 3
                        };
                    });
                }}>
                    <ViewHeader labelName = "Links"/>
                </div>
                {this.decide()}    
        </div>
        )
    }
}

export default RightScreen;