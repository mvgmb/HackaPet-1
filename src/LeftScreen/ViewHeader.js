/*
    Aqui é oque escolhe se você tá vendo o geral, só os comentários, só os links, só os arquivos


*/


import React from 'react';
import ReactDOM from 'react-dom';


class ViewHeader extends React.Component{
    render(){
        return (
            <div className="nav"> 
                <label for="comentariosBtn">Comentários</label>
                <button id="comentariosBtn" name="comentariosBtn"></button>
                <label for="arquivosBtn">Arquivos</label>
                <button id="arquivosBtn" name="arquivosBtn"></button>
                <label for="linksBtn">Links</label>
                <button id="linksBtn" name="linksBtn"></button>
            </div>
        )
    }
}

export default ViewHeader;