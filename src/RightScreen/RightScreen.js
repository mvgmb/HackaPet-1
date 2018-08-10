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



class RightScreen extends React.Component {

    constructor(props) {
        super(props);
        
        
        if(this.props.course.vale==1){
            this.state = {
                Userbox : {
                    imgs : this.props.course.rightC.imgs,
                    text: this.props.course.rightC.text,
                    info: this.props.course.rightC.info,
                    name: this.props.course.rightC.name,
                    login: this.props.course.rightC.login
                },
                Input : {
                    inp: this.props.course.rightC.inp
                },
                vale : this.props.course.vale
            }
        }
        else if(this.props.course.vale==2){
            this.state ={
                filebox:{

                },
                Input : {
                    inp: this.props.course.rightF.inp
                },
                vale : this.props.course.vale
            }
        }else if(this.props.course.vale==3){
            this.state ={
                Linkbox : {
                    ref: this.props.course.rightL.link.ref,
                    nome: this.props.course.rightL.link.nome
                },
                Input : {
                    inp: this.props.course.rightL.inp
                },
                vale : this.props.course.vale
            }
        }else{
            console.log("deu merda");
        }
        console.log(this.state);
    }

    decide = function(){
        switch(this.state.vale){
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
                  <Button variant="contained" color="primary" onClick={() => { 
                        this.setState(() => {
                                return {
                                    vale : 2
                                };
                            });
  
  

                   }}>
                         Hello World
                  </Button>
                <FilterBox/>
                {this.decide()}
                <Input inp = {this.state.Input.inp} />
                <Submited/>
            </div>
        )
    }
}

export default RightScreen;