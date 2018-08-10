import React from 'react';
import ReactDOM from 'react-dom';


class Linkbox extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            ref: props.linkbox.ref,
            nome: props.linkbox.nome
        };
    }

    render(){
        return (
            <a href = {this.state.ref} target = "_blank"> {this.state.nome} </a>
        )
    }
}

export default Linkbox;