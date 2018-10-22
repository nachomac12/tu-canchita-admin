import React, { Component } from 'react';

class Turno extends Component {
  state = {
    showTurnoInfo: false
  }

  render() {
    const { id, fecha, horario, color} = this.props;
    const { showTurnoInfo } = this.state;
    return (
    <div 
      className="card card-body mb-3 text-white" 
      style={{backgroundColor: color, cursor: 'pointer'}}
      onClick={() => this.setState(
        {showTurnoInfo: !this.state.showTurnoInfo})
      } 
    >
      <h4>
        Turno: {id} {'   '}
        <i
          className="fas fa-sort-down"
          style={{ cursor: 'pointer', fontSize: 30 }}
        />
        <i 
          className="far fa-edit"
          style={{ cursor: 'pointer', float: 'right'}}
          onClick={() => alert('Borrar')}
        />
      </h4>
      {showTurnoInfo ? (
        <ul className="list-group text-dark">
          <li className="list-group-item">Fecha: {fecha}</li>
          <li className="list-group-item">Horario: {horario} Hs.</li>
        </ul> 
      ) : null}
    </div>
    )
  }
}

export default Turno;