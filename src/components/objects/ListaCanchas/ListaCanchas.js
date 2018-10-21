import React, { Component } from 'react';
import firebase from 'firebase';
import Cancha from '../Cancha/Cancha';

class ListaCanchas extends Component {
  state = {
    canchas: []
  }

  componentDidMount() {
    const { canchas } = this.state;

    var dbCanchas = firebase.database().ref().child('canchas');
    dbCanchas.on('child_added', data => {
      let turnoAdd = [];
      var dbTurnos = firebase.database().ref().child(`canchas/${data.key}`).child('turnos');
      dbTurnos.on('child_added', turno => {
        turnoAdd = [...turnoAdd, {
          id: turno.key,
          fecha: turno.val().fecha, 
          horario: turno.val().horario, 
          alquilado: turno.val().alquilado
          }]
        })
      canchas.push({
        id: data.key,
        nombre: data.val().nombre,
        imagen: data.val().imagen,
        precio: data.val().precio,
        puntaje: data.val().puntaje,
        turnos: turnoAdd,
        ubicacion: data.val().ubicacion
      })
      this.setState({canchas})
    })
  }

  render() {
    const canchas = this.state.canchas.map(cancha => {
      return(
        <div className="col-md-3 mt-2">
          <Cancha
            key={cancha.id}
            nombre={cancha.nombre}
            imagen={cancha.imagen.uri}
            id={cancha.id}
          />
        </div>
      )
    })
    return(
      <div className="row justify-content-center m-2">
        {canchas}
      </div>
    )
  }

}

export default ListaCanchas;