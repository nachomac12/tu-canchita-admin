import React, { Component } from 'react';
import firebase from 'firebase';
import Turno from '../Turno/Turno';

class EditarCancha extends Component {
  constructor() {
    super();
    this.state = {
      turnos: [],
      canchaImagen: "",
      canchaNombre: "",
      imagen: null,
      url: "",
      progress: 0
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    const { turnos } = this.state;
    var dbTurnos = firebase.database().ref().child(`canchas/${id}/turnos`)
    dbTurnos.on('child_added', data => {
      turnos.push({
        id: data.key,
        alquilado: data.val().alquilado,
        fecha: data.val().fecha,
        horario: data.val().horario
      })
      this.setState({turnos})
    })

    var dbCancha = firebase.database().ref().child(`canchas/${id}`)
    dbCancha.on('value', cancha => {
      this.setState({canchaImagen: cancha.val().imagen, canchaNombre: cancha.val().nombre})
    })
  }

  onChange = e => {
    if (e.target.files[0]) {
      const imagen = e.target.files[0];
      this.setState(() => ({imagen}));
      console.log(imagen)
    }
  }

  onSubmit = () => {
    const { id } = this.props.match.params;
    const { imagen } = this.state;
    const uploadTask = firebase.storage().ref(`images/${imagen.name}`).put(imagen)
    uploadTask.on('state_changed', 
    snap => {
      // barra progreso
      const progress = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        this.setState({progress});
    },
    error => {
      // rta a errores
      console.log(error)
    },
    () => {
      firebase.storage().ref('images').child(imagen.name).getDownloadURL().then(url => {
        this.setState({url})
        firebase.database().ref().child(`canchas/${id}`).update({imagen: {uri: this.state.url}})
      })
    }
    )
  }

  render() {
    var color = "";
    const turnos = this.state.turnos.map(turno => {
      if (turno.alquilado) {
        color = "#f91d44"
      } else {
        color = "#2ad210"
      }
      return (
      <Turno 
        key={turno.id}
        id={turno.id}
        fecha={turno.fecha}
        horario={turno.horario}
        color={color}
      />
      )
    })
    return (
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1 className="text-center">{this.state.canchaNombre}</h1>
          <img className="m-2" src={this.state.canchaImagen.uri} width="100%" alt="img"/>
          <input 
            type="file" 
            onChange={this.onChange}
            className="m-2"
          />
          <div className="progress ml-2">
            <div className="progress-bar bg-success" style={{width: `${this.state.progress}%`}}>{this.state.progress}%</div>
          </div>
          <button type="submit" className="btn btn-outline-success btn-block m-2" onClick={this.onSubmit}>Enviar</button>
        </div>
        <div className="col-md-5">
          {turnos}
        </div>
      </div>)
  }
}

export default EditarCancha;