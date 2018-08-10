import React from 'react';
import ReactDOM from 'react-dom';


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
            <div>
                {this.state.links.map(arr => (
                    <a href = {arr.ref} target = "_blank"> {arr.nome} </a>
                ))}
            </div>
        )
    }
}

export default Linkbox;