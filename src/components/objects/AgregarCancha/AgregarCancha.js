import React, { Component } from 'react';
import TextInputGroup from '../../layout/TextInputGroup/TextInputGroup';
import firebase from 'firebase';

class AgregarCancha extends Component {
  state = {
    imagen: {uri: "http://www.pistafutbol5.com/public/image/Captura_de_pantalla_2016-01-26_a_las_23.38__.36__.png"},
    nombre: '',
    precio: '',
    puntaje: '0',
    turnos: [
      {fecha: "22-11-2018", horario: "08-09", alquilado: false},
      {fecha: "22-11-2018", horario: "09-10", alquilado: false},
      {fecha: "22-11-2018", horario: "10-11", alquilado: false},
      {fecha: "22-11-2018", horario: "11-12", alquilado: false},
      {fecha: "22-11-2018", horario: "12-13", alquilado: false},
      {fecha: "22-11-2018", horario: "13-14", alquilado: false},
      {fecha: "22-11-2018", horario: "14-15", alquilado: false},
      {fecha: "22-11-2018", horario: "15-16", alquilado: false},
      {fecha: "22-11-2018", horario: "16-17", alquilado: false},
      {fecha: "22-11-2018", horario: "17-18", alquilado: false},
      {fecha: "22-11-2018", horario: "18-19", alquilado: false},
      {fecha: "22-11-2018", horario: "19-20", alquilado: false},
      {fecha: "22-11-2018", horario: "20-21", alquilado: false},
      {fecha: "22-11-2018", horario: "21-22", alquilado: false},
      {fecha: "22-11-2018", horario: "22-23", alquilado: false},
      {fecha: "22-11-2018", horario: "23-24", alquilado: false}
    ],
    ubicacion: '',
    errors: {}
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {

    e.preventDefault();

    const { nombre, imagen, precio, puntaje, turnos, ubicacion } = this.state;

    var db = firebase.database().ref().child('canchas')

    // Me fijo si hay errores

    if (nombre === "") {
      this.setState({errors: {nombre: 'Falta ingresar nombre'}})
      return;
    }

    if (precio === "") {
      this.setState({errors: {precio: 'Falta ingresar precio'}})
      return;
    }

    if (ubicacion === "") {
      this.setState({errors: {ubicacion: 'Falta ingresar ubicacion'}})
      return;
    }

    db.push().set({nombre, imagen, precio, puntaje, turnos, ubicacion})
      .then(alert("La cancha ha sido agregada!"))

    this.setState({
      nombre: '',
      precio: '',
      ubicacion: '',
      errors: {}
    })
  }

  render() {
    const { nombre, precio, ubicacion, errors } = this.state;
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            
            <TextInputGroup 
              label="Nombre"
              name="nombre"
              placeholder="Ingresar nombre..."
              value={nombre}
              onChange={this.onChange}
              error={errors.nombre}
            />

            <TextInputGroup 
              label="Precio"
              name="precio"
              placeholder="Ingresar precio..."
              value={precio}
              onChange={this.onChange}
              error={errors.precio}
            />

            <TextInputGroup 
              label="Ubicacion"
              name="ubicacion"
              placeholder="Ingresar ubicacion..."
              value={ubicacion}
              onChange={this.onChange}
              error={errors.ubicacion}
            />

            <input type="submit" value="Agregar cancha" className="btn btn-block btn-success"/>

          </div>
      </div>
      </form>
    )
  }
}


export default AgregarCancha;