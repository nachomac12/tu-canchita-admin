import React from 'react';
import { Link } from 'react-router-dom';

const Cancha = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.imagen} alt="img"/>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><h1 className="text-center">{props.nombre}</h1></li>
      </ul>
        <div className="card-body text-center">
          <Link to={`/editar-cancha/${props.id}`} className="btn btn-info">Editar cancha</Link>
        </div>
    </div>
  )
}

export default Cancha;