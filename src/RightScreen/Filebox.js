import React from 'react';
import ReactDOM from 'react-dom';


let imagemPdf = require('../images/iconPdf.png');

class Filebox extends React.Component{
    constructor(props){
        console.log(props);
        super(props);
        this.state = {
            pdfs : props.Filebox
        };
    }

    render(){
        return (
            <div>
                {this.state.pdfs.map(arr => (
                <div>
                    <a href = {arr.ref} download> <img src={imagemPdf} /> </a>
                    <p> {arr.name} </p>
                </div>
                ))}
            </div>
        )
    }
}

export default Filebox;