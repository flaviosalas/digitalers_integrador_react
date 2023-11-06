import React, { useState, useEffect } from 'react';

function Certificados() {
  const [certificados, setCertificados] = useState([]);

  useEffect(() => {
    async function cargarCertificados() {
      try {
        const response = await fetch("https://my-json-server.typicode.com/flaviosalas/jdata/certificados");
        if (!response.ok) {
          throw new Error("No se pudo cargar la información de certificados.");
        }
        const data = await response.json();
        setCertificados(data);
        console.log('Certificados cargados con éxito:', data); 
      } catch (error) {
        console.error("Error al cargar los certificados:", error.message);
      }
    }
  
    cargarCertificados();
  }, []);
  

  return (
    <section className="certificados">
      <h1 className="certificados__titulo">Certificados</h1>
      <div className="certificados__contenido">
        {certificados.map((certificado, index) => (
          <Certificado key={index} certificado={certificado} />
        ))}
      </div>
    </section>
  );
}

function Certificado({ certificado }) {
  return (
    <section className="certificados__contenedor">
      <article className="certificados__contenido">
        <img className="certificados__foto" src={certificado.foto} alt="Foto del diploma" />
        <h2 className="certificados__matricula">{certificado.matricula}</h2>
        <h3 className="certificados__fecha">{certificado.fecha}</h3>
      </article>
    </section>
  );
}

export default Certificados;
