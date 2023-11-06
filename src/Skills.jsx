import React from 'react';

const Skill = ({ nombre, progreso }) => {
  return (
    <div className={`skills__${nombre.toLowerCase()}`}>
      <p className="skills__lenguaje">{nombre}</p>
      <div className="skills__progreso">
        <div className={`skills__progreso--${nombre.toLowerCase()}`} style={{ width: `${progreso}%` }}></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillsData = [
    { nombre: "HTML", progreso: 88 },
    { nombre: "CSS", progreso: 77 },
    { nombre: "JS", progreso: 88 },
    { nombre: "React", progreso: 77 },
  ];

  return (
    <section className="skills">
      <p className="skills__titulo">Skills</p>
      <div className="skills__contenido">
        <div className="skills__contenedor">
          {skillsData.map((skill, index) => (
            <Skill key={index} nombre={skill.nombre} progreso={skill.progreso} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
