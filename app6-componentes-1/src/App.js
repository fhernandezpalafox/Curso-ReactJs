import React from 'react'
import './App.css';


class App extends React.Component {
 constructor(){
   super();

   this.state =  {
     data: [{
       id:1,
       nombre:"Felipe",
       edad:31
     }, 
     {
      id:2,
      nombre:"Oscar",
      edad:32
    },
    {
      id:3,
      nombre:"Luis",
      edad:28
    }]
   }
 }


  render(){
    return (
      <div>
        <Header/>
        <Content/>
        <table>
          <tbody>
              {
                this.state.data.map((persona, index) => <ContentTable 
                                                            key = {index} 
                                                            data ={persona} /> )
              }
          </tbody>
        </table>
      </div>
    )
  }
}


class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>Titulo de la pagina</h1>
      </div>
    )
  }
}



class Content extends React.Component {
  render(){
    return (
      <div>
        <h2> Contenido </h2>
        <p>
          Esto es una  descripción
          <button>Aceptar</button>
        </p>
      </div>
    )
  }
}


class ContentTable extends React.Component {
  render(){
    return (
      <div>
         <tr>
           <td>{this.props.data.id}</td>
           <td>{this.props.data.nombre}</td>
           <td>{this.props.data.edad}</td>
         </tr>
      </div>
    )
  }
}



export default App;
