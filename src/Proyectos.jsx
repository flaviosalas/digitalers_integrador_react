import React, { useState, useEffect } from 'react';
import Paginado from './Paginado';
import Botones from './Botones';

function crearProyectoElement(proyecto) {
  return (
    <article className={`proyectos__${proyecto.tipo}`} key={proyecto.id}>
      <img className="proyectos__imagen" src={proyecto.imagen} alt="Foto del Portfolio Challenge" />
      <h3 className="proyectos__hashtag">{proyecto.hashtag}</h3>
      <h1 className="proyectos__titulo">{proyecto.titulo}</h1>
      <p className="proyectos__descripcion">{proyecto.descripcion}</p>
      <div className="proyectos__boton">
        <button type="button" className="proyectos__boton--demo">
          Demo
        </button>
        <button type="button" className="proyectos__boton--code">
          Code
        </button>
      </div>
    </article>
  );
}

function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const proyectosPorPagina = 3;
  const [tipoProyecto, setTipoProyecto] = useState('');
  const [totalProyectos, setTotalProyectos] = useState(0);

  useEffect(() => {
    async function cargarProyectos() {
      try {
        const response = await fetch('https://my-json-server.typicode.com/flaviosalas/jdata/proyectos'); 
        if (!response.ok) {
          throw new Error('No se pudo cargar la información de proyectos.');
        }
        const data = await response.json();
        setProyectos(data);
        setTotalProyectos(data.length);
        console.log('Proyectos cargados con éxito:', data);
      } catch (error) {
        console.error('Error al cargar los proyectos:', error.message);
      }
    }
  
    cargarProyectos();
  }, []);
  

    const proyectosFiltrados = tipoProyecto ? proyectos.filter(proyecto => proyecto.tipo === tipoProyecto) : proyectos;
    const cantidadProyectos = proyectosFiltrados.length;
    const numPaginas = Math.ceil(cantidadProyectos / proyectosPorPagina);
    const proyectosActuales = proyectosFiltrados.slice(
      (paginaActual - 1) * proyectosPorPagina,
      paginaActual * proyectosPorPagina
    );

    const filtrarProyectosPorTipo = (tipo) => {
      if (tipo !== tipoProyecto) {
        setPaginaActual(1);
      }
      setTipoProyecto(tipo);
    };



    return (
      <div className="proyectos">
        <Botones filtrarProyectosPorTipo={filtrarProyectosPorTipo} totalProyectos={cantidadProyectos} />
        {proyectosActuales.map((proyecto, index) => (
          <article className={`proyectos__${proyecto.tipo || ''}`} key={`${proyecto.id}-${index}`}>
            <img className="proyectos__imagen" src={proyecto.imagen} alt="Foto del Portfolio Challenge" />
            <h3 className="proyectos__hashtag">{proyecto.hashtag}</h3>
            <h1 className="proyectos__titulo">{proyecto.titulo}</h1>
            <p className="proyectos__descripcion">{proyecto.descripcion}</p>
            <div className="proyectos__boton">
              <button type="button" className="proyectos__boton--demo">
                Demo
              </button>
              <button type="button" className="proyectos__boton--code">
                Code
              </button>
            </div>
          </article>
        ))}
        <Paginado
          totalProyectos={numPaginas}
          paginaActual={paginaActual}
          mostrarPagina={setPaginaActual}
        />
      </div>
    );
  }
  
  export default Proyectos;