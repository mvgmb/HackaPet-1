import React from 'react';
import ReactDOM from 'react-dom';


class Linkbox extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {
            ref: props.Linkbox.ref,
            nome: props.Linkbox.nome
        };
    }

    render(){
        return (
            <a href = {this.state.ref} target = "_blank"> {this.state.nome} </a>
        )
    }
}

export default Linkbox;