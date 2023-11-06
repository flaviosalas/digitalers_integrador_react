import React, { useState, useEffect } from 'react';

function Botones({ filtrarProyectosPorTipo, totalProyectos }) {
  const [botonActivo, setBotonActivo] = useState('responsive'); // Establece el botón activo por defecto

  const handleClick = (tipo) => {
    filtrarProyectosPorTipo(tipo);
    setBotonActivo(tipo);
  };

  useEffect(() => {
    // Aquí puedes cargar los proyectos con el botón "Responsive" como activo por defecto
    filtrarProyectosPorTipo(botonActivo);
  }, [botonActivo, filtrarProyectosPorTipo]);

  return (
    <div className="boton">
      <p className="boton__titulo" id="numeroProyectos">Proyectos({totalProyectos})</p>
      <div className="boton__contenedor">
        <button
          type="button"
          className={`boton__${botonActivo === 'responsive' ? 'activo' : 'default'}`}
          id="responsive"
          onClick={() => handleClick('responsive')}
        >
          Responsivo
        </button>
        <button
          type="button"
          className={`boton__${botonActivo === 'javascript' ? 'activo' : 'default'}`}
          id="javascript"
          onClick={() => handleClick('javascript')}
        >
          JavaScript
        </button>
        <button
          type="button"
          className={`boton__${botonActivo === 'react' ? 'activo' : 'default'}`}
          id="react"
          onClick={() => handleClick('react')}
        >
          React
        </button>
      </div>
    </div>
  );
}

export default Botones;
