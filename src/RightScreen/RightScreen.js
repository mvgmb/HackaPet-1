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
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import ViewHeader from './ViewHeader';


class RightScreen extends React.Component {

    constructor(props) {
        super(props);
        
        if(this.props.course.definirTelaDireita==1){
            this.state = {
                Userbox : {
                    imgs : this.props.course.comentariosDosAlunos.imgs,
                    text: this.props.course.comentariosDosAlunos.text,
                    info: this.props.course.comentariosDosAlunos.info,
                    name: this.props.course.comentariosDosAlunos.name,
                    login: this.props.course.comentariosDosAlunos.login
                },
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
        let a = 0;
        return (
        <div className="rightScreen">
                <div id="comentarioBtn" className="navBtn" onClick={()=>{
                
                    this.setState(() => {
                        return {
                            Userbox : {
                                imgs : this.props.course.comentariosDosAlunos.imgs,
                                text: this.props.course.comentariosDosAlunos.text,
                                info: this.props.course.comentariosDosAlunos.info,
                                name: this.props.course.comentariosDosAlunos.name,
                                login: this.props.course.comentariosDosAlunos.login
                            },
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
                <FilterBox/>
                {this.decide()}
                <Input inp = {this.state.Input.inp} />
                <Submited/>
        </div>
        )
    }
}

export default RightScreen;