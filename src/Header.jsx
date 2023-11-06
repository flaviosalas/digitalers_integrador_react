import React, { Component } from 'react';

class Header extends Component {
  state = {
    nombre: 'Nombre',
    profesion: 'Front-end Developer',
    correo: 'ejemplo@mail.com',
    telefono: '+54 9 11-1234-5678',
    descripcion: 'Self-motivated developer, who is willing to learn and create outstanding UI applications.',
    descripcionDesktop: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
  };

  render() {
    return (
      <header className="perfil">
        <div className="perfil__contenedor-foto">
          <img className="perfil__foto-de-perfil" src="./img/profile-pic.png" alt="Foto de Perfil." />
        </div>
        <div className="perfil__detalles">
          <div className="perfil__contenedor">
            <div className="perfil__nombre-profesion">
              <p className="perfil__nombre">{this.state.nombre}</p>
              <p className="perfil__profesion">{this.state.profesion}</p>
            </div>
            <div className="perfil__correo-telefono">
              <p className="perfil__correo">{this.state.correo}</p>
              <p className="perfil__telefono">{this.state.telefono}</p>
            </div>
          </div>
          <div className="perfil__biografia">
            <p className="perfil__descripcion">{this.state.descripcion}</p>
            <p className="perfil__descripcion--desktop">{this.state.descripcionDesktop}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
