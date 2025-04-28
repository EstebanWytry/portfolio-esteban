import React from 'react';
import { Header } from "./componentes/Header";
import { Main } from "./componentes/Main";
import { Footer } from "./componentes/Footer";


const Home = () => {
  const alumno = {
    nombre: "Juan Esteban",
    apellido: "Wytrykusz",
    descripcion: "Estudiante de programación de la Universidad Tecnologica de Tucuman. manejo de Lenguajes como C#, Java, HTML, CSS, JavaScript y base de datos con MongoDB",
    imagen: "",
  };

  return (
    <>
      <Header/>
      <Main alumno={alumno} />
      <Footer/>
    </>
  );
};

export default Home;
