import React from 'react'
import Listado from './Listado'

import './App.css';

class App extends React.Component{
   constructor(props){
     super(props);

     this.agregarPersona  =  this.agregarPersona.bind(this);
     this.state =  {
      listadoP: []
     }
   }  

  render(){
     return (
        <div>
            <form onSubmit={this.agregarPersona}>
             
                <p>
                    Nombre del Empleado:
                    <input type="text" name="txtNombre" />
                </p>
                <p>
                    Edad del Empleado:
                    <input type="number" name="txtEdad"  />
                </p>
   
                <input type="submit" value="Agregar empleado" />

            </form>

            <Listado
              listadopersonas={this.state.listadoP} />
        </div>
     );

  }


  agregarPersona(event){
      event.preventDefault();

      const nombre  =  event.target.txtNombre.value;
      const edad  =  event.target.txtEdad.value;

       const objPersona =  {
         nombre: nombre,
         edad: edad
       }

       var temp =  this.state.listadoP;
       temp.push(objPersona);

       this.setState({
        listadoP: temp
       })

  }

}


export default App;
