import React, { useEffect, useState } from "react";

function ProyectoPrincipal() {
  const [proyectoPrincipal, setProyectoPrincipal] = useState(null);

  useEffect(() => {
    async function cargarProyectoPrincipal() {
      try {
        const response = await fetch("https://my-json-server.typicode.com/flaviosalas/jdata/proyectos");
        if (!response.ok) {
          throw new Error("No se pudo cargar la información de proyectos.");
        }
        const data = await response.json();
        if (data.length > 0) {
          setProyectoPrincipal(data[0]);
          console.log('Proyecto principal cargado con éxito:', data[0]); 
        }
      } catch (error) {
        console.error("Error al cargar el proyecto principal:", error.message);
      }
    }
  
    cargarProyectoPrincipal();
  }, []);
  

  return (
    <section className="portfolio">
      <div className="proyecto-principal">
        {proyectoPrincipal && (
          <article className={`proyectos__${proyectoPrincipal.tipo}`}>
            <img className="proyectos__imagen" src={proyectoPrincipal.imagen} alt="Foto del Portfolio Challenge" />
            <h3 className="proyectos__hashtag">{proyectoPrincipal.hashtag}</h3>
            <h1 className="proyectos__titulo">{proyectoPrincipal.titulo}</h1>
            <p className="proyectos__descripcion">{proyectoPrincipal.descripcion}</p>
            <div className="proyectos__boton">
              <button type="button" className="proyectos__boton--demo">
                Demo
              </button>
              <button type="button" className="proyectos__boton--code">
                Code
              </button>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

export default ProyectoPrincipal;
