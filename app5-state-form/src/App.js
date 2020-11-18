import React,{Component} from 'react';
import './App.css';


class App extends Component {

   constructor(props){
     super(props)

     this.state  = {
         empleados: [{
               numempleado:345,
               nombreempleado:'Felipe Hernandez',
               sueldoempleado:3000     
              },
              {
                    numempleado:367,
                    nombreempleado:'Oscar Hernandez',
                    sueldoempleado:2500     
              },
              {
                numempleado:678,
                nombreempleado:'Luis Hernandez',
                sueldoempleado:5000     
          }]
     }
      
     this.eliminarEmpleado = this.eliminarEmpleado.bind(this);
     this.agregarEmpleado =  this.agregarEmpleado.bind(this);
     this.eliminarEmpleadoSeleccionado =  this.eliminarEmpleadoSeleccionado.bind(this);
   }

   render(){
       return (
       <div style={{ margin:'20px'}}>
           <div>
             <form onSubmit={this.agregarEmpleado}>
            <p>
                    Numero de Empleado:
                    <input type="number" name="txtnumEmpleado"  />
                </p>
              <br/>
                <p>
                    Nombre de Empleado:
                    <input type="text" name="txtNombre" />
                </p>
                <p>
                    Sueldo de Empleado:
                    <input type="number" name="txtSueldo"  />
                </p>
   
                <input type="submit" value="Agregar empleado" />
                </form>            
           </div>
          <div style={{clear:'Both',height:'30px'}}></div>
           <table style={{border: '1px solid #ccc',color: 'blue'}}>
            <thead>
                <tr>
                  <th>Numero Empleado</th>
                  <th>Nombre</th>
                  <th>Sueldo</th>
                  <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
               {
                 this.state.empleados.map( element => {
                   return (
                      <tr key={element.numempleado}>
                          <td>{element.numempleado}</td>
                          <td>{element.nombreempleado}</td>  
                          <td>{element.sueldoempleado}</td> 
                          <td>
                            <button onClick={ ()=> this.eliminarEmpleadoSeleccionado(element.numempleado)}>Borrar</button>
                          </td>  
                      </tr>
                   )
                 })
               }
            </tbody>
           </table>
           <div style={{clear:'Both',height:'10px'}}></div>
           <button onClick={this.eliminarEmpleado}>Eliminar Empleado</button>
       </div>)
   }

   agregarEmpleado(e){
   e.preventDefault();

    const numempleado = e.target.txtnumEmpleado.value; 
    const nombre  =  e.target.txtNombre.value;
    const sueldo  =  e.target.txtSueldo.value;

    var obj  =  {
            numempleado:numempleado,
            nombreempleado:nombre,
            sueldoempleado:sueldo     
      };

      var  temp  =  this.state.empleados;
           temp.push(obj);
    
          this.setState({
            empleados : temp
          })

   }

   eliminarEmpleado() {
    if( this.state.empleados.length >  0){
       var tempoEmpleados  =  this.state.empleados;
       tempoEmpleados.pop();
       this.setState({
          empleados: tempoEmpleados
       })
    }else {
      alert("Ya no se cuenta con empleados");
    }
   }

   eliminarEmpleadoSeleccionado(numEmpleado) {
      var temp =  this.state.empleados.filter((el) => el.numempleado !== numEmpleado);
      this.setState({
        empleados: temp
      })
   }


}


export default App;
