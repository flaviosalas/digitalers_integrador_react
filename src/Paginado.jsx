function Paginado({ totalProyectos, paginaActual, mostrarPagina }) {
    const proyectosPorPagina = 3;
  
    const handlePaginaAnterior = (event) => {
      event.preventDefault();
      if (paginaActual > 1) {
        mostrarPagina(paginaActual - 1);
      }
    };
  
    const handlePaginaSiguiente = (event) => {
      event.preventDefault();
      if (paginaActual < totalProyectos) {
        mostrarPagina(paginaActual + 1);
      }
    }
  
    return (
      <div className="paginado">
        <a href="#" onClick={handlePaginaAnterior} className={paginaActual === 1 ? 'disabled' : ''}>
          ❮
        </a>
        {Array.from({ length: totalProyectos }, (_, index) => (
          <a
            key={index + 1}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              mostrarPagina(index + 1);
            }}
            className={paginaActual === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </a>
        ))}
        <a href="#" onClick={handlePaginaSiguiente} className={paginaActual === totalProyectos ? 'disabled' : ''}>
          ❯
        </a>
      </div>
    );
  }
  
  export default Paginado;
  