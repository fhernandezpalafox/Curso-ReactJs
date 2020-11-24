import React from 'react'
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>

        <SelectComponentCustom
            _valorDefault='Soltero'
            _DataSource={['Casado','Soltero','Divorciado']}
        />

       <SelectComponentCustom
            _valorDefault='Primaria'
            _DataSource={['Primaria','Secundaria','Preparatoria','Universidad']}
        />

        <FormValidation />


        <PeticionAjax />

      </div>
    );

  }


}


class SelectComponentCustom extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      valorSelect: this.props._valorDefault
    }

    this.functionSelect =  this.functionSelect.bind(this);
  }

  render(){
    return (
        <div>
          <p>
            <select value={this.state.valorSelect} onChange={this.functionSelect}>
            {
                    this.props._DataSource.map((elemento) => (
                    <option>{elemento}</option>
                    ))
            }
            </select>
            <p>
              Elemento seleccionado: {this.state.valorSelect}
            </p>
          </p>
        </div>
    );
  }

  functionSelect(event){
    this.setState({
      valorSelect: event.target.value
    })
  }

  
}


class FormValidation extends React.Component{
   
  constructor(props){
    super(props);

     this.state = {
       nombre:'',
       matricula:'',
       semestre: 1
     }

    this.cambioNombre =  this.cambioNombre.bind(this); 
    this.cambioSemestre =  this.cambioSemestre.bind(this);  
    this.cambioMatricula =  this.cambioMatricula.bind(this);
  }

  render(){
    return (
      <div>
           <form>
              
              <p>Nombre: <input type='text' value={this.state.nombre} onChange={this.cambioNombre} /></p>

              <p>Matricula: <input type='number' value={this.state.matricula} onChange={this.cambioMatricula} /></p>

              <p>Semestre: <input type='number' value={this.state.semestre} onChange={this.cambioSemestre} /></p>
              
            
              <p>
                <input type='submit' value='Aceptar' />
              </p>
           </form>
            

           <hr />
        
      </div>
    );
  }

  //React hook
      //UseState
          
  cambioNombre(event){
    this.setState({
       nombre: event.target.nombre
    })

     //LOGICA
          
  }

  cambioSemestre(event){

    this.setState({
       semestre: event.target.semestre,
    })
  }

  cambioMatricula(event){
    this.setState({
      matricula: event.target.matricula
   })
  }


}


class PeticionAjax extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      articulos: [],
      recuperar: false
    }
  }

  componentWillMount(){
      fetch('http://scratchya.com.ar/vue/datos.php')
           .then((response) => {
             return response.json()
           })
           .then((Listarticulo) =>{
              this.setState({
                articulos: Listarticulo,
                recuperar :true
              })
           })
  }

  render(){
    if(this.state.recuperar)
        return this.mostrarInformacion()   
    else 
        return (<div>Cargando...</div>)
  }


  mostrarInformacion(){
    return(
      <div>
         <table>
           <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
                {
                  this.state.articulos.map(articulo => {
                       return (
                          <tr>
                            <td>{articulo.codigo}</td>
                            <td>{articulo.descripcion}</td>
                            <td>{articulo.precio}</td>
                          </tr>
                       );
                  })
                }    
            </tbody>
         </table>
      </div>
    )
  }
}


export default App;
