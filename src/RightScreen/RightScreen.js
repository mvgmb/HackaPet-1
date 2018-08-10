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
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';


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
                    ref: this.props.course.rightL.link[0].ref,
                    nome: this.props.course.rightL.link[0].nome
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
            <div className='nave'>
         <Paper>
            <Tabs
                value={this.state.value}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleChange}
            >
                <Tab label="Active" />
                <Tab label="Active" />
                <Tab label="Active" />
            </Tabs>
         </Paper>
         </div>
                  <Button variant="contained" color="primary" >
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