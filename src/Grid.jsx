import React, { useState } from 'react';
import Skills from './Skills';
import Certificados from './Certificados';
import Experiencia from './Experiencia';
import Proyectos from './Proyectos';
import ProyectoPrincipal from './ProyectoPrincipal';

function Grid() {
  const [paginaActual, setPaginaActual] = useState(1);

  return (
    <div className='grid-escritorio'>
        <Skills />
        <Proyectos paginaActual={paginaActual} setPaginaActual={setPaginaActual} />
        <Certificados />
        <Experiencia />
        <ProyectoPrincipal />
        

    </div>
  );
}

export default Grid;