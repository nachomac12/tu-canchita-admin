import React from 'react';
import { Link } from 'react-router-dom';

const Cancha = (props) => {
  return (
    <div class="card">
      <img class="card-img-top" src={props.imagen} alt="img"/>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><h1>{props.nombre}</h1></li>
      </ul>
      <div class="card-body">
        <Link to={`/editar-cancha/${props.id}`} class="btn btn-info">Editar cancha</Link>
      </div>
    </div>
  )
}

export default Cancha;