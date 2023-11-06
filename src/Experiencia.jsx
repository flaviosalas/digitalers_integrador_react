import React, { useState, useEffect } from 'react';

function Experiencia() {
  const [experienciaData, setExperienciaData] = useState([]);

  useEffect(() => {
    cargarExperiencia()
      .then((data) => {
        setExperienciaData(data);
        console.log('Datos de experiencia cargados con éxito:', data);
      })
      .catch((error) => console.error("Error al cargar la experiencia:", error.message));
  }, []);
  
  async function cargarExperiencia() {
    try {
      const response = await fetch("https://my-json-server.typicode.com/flaviosalas/jdata/experiencia");
      if (!response.ok) {
        throw new Error("No se pudo cargar la información de experiencia.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  function crearExperienciaElement(experiencia) {
    return (
      <article className="experiencia__contenido--adidas">
        <div className="experiencia__detalles">
          <img className="experiencia__logo" src={experiencia.logo} alt={`Logo ${experiencia.empresa}`} />
          <div className="experiencia__descripcion">
            <h3 className="experiencia__descripcion--fecha">{experiencia.fecha}</h3>
            <h2 className="experiencia__descripcion--matricula">{experiencia.puesto}</h2>
            <p className="experiencia__descripcion--desc-desktop">{experiencia.descripcion}</p>
          </div>
        </div>
        <p className="experiencia__descripcion--desc-mobile">{experiencia.descripcion}</p>
      </article>
    );
  }

  return (
    <section className="experiencia">
      <p className="experiencia__titulo">Experiencia</p>
      <div className="experiencia__contenedor">
        {experienciaData.map((experiencia, index) => (
          <div key={index}>
            {crearExperienciaElement(experiencia)}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiencia;
