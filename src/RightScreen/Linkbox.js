import React from 'react';
import ReactDOM from 'react-dom';

let link = require("../images/link.png")

class Linkbox extends React.Component{
    
    constructor(props){
        console.log(props);    
        super(props);
        this.state = {
            links : props.Linkbox
        };
    }

    render(){
        return (
            <div className="linkbox">
            <div>
                {this.state.links.map(arr => (

                    <a href = {arr.ref} target = "_blank"> <img src={link} />{arr.nome} </a>
                ))}
            </div>
            </div>
        )
    }
}

export default Linkbox;