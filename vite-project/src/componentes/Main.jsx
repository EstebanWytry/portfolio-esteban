import React from 'react';


export const Main = ({ alumno }) => {
  return (
    <div className="card">
      <img src={alumno.imagen} alt="" width="200" />
      <h2>{alumno.nombre} {alumno.apellido}</h2>
      <p>{alumno.descripcion}</p>
    </div>
  );
};


