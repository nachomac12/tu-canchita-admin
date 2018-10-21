import React, { Component } from 'react';
import firebase from 'firebase';

class EditarCancha extends Component {
  state = {
    turnos: []
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    const { turnos } = this.state;
    var db = firebase.database().ref().child(`canchas/${id}/turnos`)
    db.on('child_added', data => {
      turnos.push({
        id: data.key,
        alquilado: data.val().alquilado,
        fecha: data.val().fecha,
        horario: data.val().horario
      })
      this.setState({turnos})
    })
  }

  render() {
    const turnos = this.state.turnos.map(turno => {
      return (
      <ul>
        <li>{turno.id}</li>
        <li>{turno.fecha}</li>
        <li>{turno.horario}</li>
      </ul>
      )
    })
    return (
      <div>
        {turnos}
      </div>
    )
  }
}

export default EditarCancha;