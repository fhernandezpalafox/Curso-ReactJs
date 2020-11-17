import React from 'react';
import './Listado.css';

class Listado extends React.Component{
    render(){
        return (
            <ul>
                {
                    this.props.listadopersonas.map((elemento) => (
                    <li>El nombre de la persona es {elemento.nombre} y su edad es {elemento.edad}</li>
                    ))
                }
            </ul>
        )
    }
}


export default Listado;