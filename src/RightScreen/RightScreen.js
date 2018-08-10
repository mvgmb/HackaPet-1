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
                filebox:{

                },
                Input : {
                    inp: this.props.course.Arquivos.inp
                },
                definirTelaDireita : this.props.course.definirTelaDireita
            }
        }else if(this.props.course.definirTelaDireita==3){
            this.state ={
                Linkbox : {
                    ref: this.props.course.Links.link[0].ref,
                    nome: this.props.course.Links.link[0].nome
                },
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
                return  <div>
                             <Userbox Userbox={this.state.Userbox}  />
                         </div>
            case 2:
                return <div>
                            <Filebox Filebox={this.state.Filebox} />
                        </div>
            case 3:
                return <Linkbox Linkbox={this.state.Linkbox} />
            default:
                console.log("Deu merda no switch-case");
        }
    }

    
    render() {
        return (
            <div className="rightScreen">
            <div className='nave'>
         <Paper>
            <Tabs
                value={this.state.value}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleChange}
            >
                <Tab label="Active" onClick={() =>{
                    
                    this.setState(() => {
                        return {   
                            Linkbox : this.props.course.Links.link,
                        Input : {
                            inp: this.props.course.Links.inp
                        },
                        definirTelaDireita :3
                    };
                    });
                    }}/>

                <Tab label="Active" onClick={() =>{
                    
                    this.setState(() => {
                        return {
                            filebox:{

                            },
                            Input : {
                                inp: this.props.course.Arquivos.inp
                            },
                            definirTelaDireita : 2
                        };
                    });
                    }} />

                <Tab label="Active" onClick={() =>{
                    
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
                    }}/>
                    
            </Tabs>
         </Paper>
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