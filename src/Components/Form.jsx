import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";
import Paciente from "./Paciente";

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [sexoMascota, SetSexoMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [esterilizacion, setEsterilizacion] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [masInfo, setMasInfo] = useState("");
  const [error, setError] = useState(false);

  console.log(esterilizacion);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      SetSexoMascota(paciente.sexoMascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setEsterilizacion(paciente.esterilizacion);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const randomId = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return randomId + fecha;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Validación del formulario

    if (
      [nombre, sexoMascota, propietario, email, fecha, sintomas].includes("")
    ) {
      console.log("Hay campos vacíos");
      setError(true);
      return;
    }
    setError(false);

    //Objeto paciente
    const objetoPaciente = {
      nombre,
      sexoMascota,
      propietario,
      email,
      fecha,
      esterilizacion,
      sintomas,
      masInfo,
    };

    if (paciente.id) {
      //Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacienteActualizado = pacientes.map((pacienteInitialState) =>
        pacienteInitialState.id === paciente.id
          ? objetoPaciente
          : pacienteInitialState
      );
      setPacientes(pacienteActualizado);
      setPaciente({});
    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar formulario con evento y submit
    setNombre("");
    SetSexoMascota("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setEsterilizacion("");
    setSintomas("");
    setMasInfo("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            {" "}
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-t-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Sexo Mascota
          </label>
          <select
            id="sexoMascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-t-md"
            onChange={(event) => SetSexoMascota(event.target.value)}
          >
            <option value="choose">Selecciona una opción</option>
            <option value="Hembra">Hembra</option>
            <option value="Macho">Macho</option>
          </select>{" "}
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-t-md"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(event) => setPropietario(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-t-md"
            type="email"
            placeholder="Email Contacto Propietario"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-t-md"
            type="date"
            value={fecha}
            onChange={(event) => setFecha(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="esterilizacion"
            className="block text-gray-700 uppercase font-bold"
          >
            ¿Paciente esterelizado?
          </label>
          <label htmlFor="esterilizacion" className="uppercase">
            n/a
            <input
              id="option1"
              className="m-2"
              type="radio"
              name='esterilizacion'
              value={'n/a'}
              onChange={(event) => setEsterilizacion(event.target.value)}
            />
          </label>
          <label htmlFor="esterilizacion" className="uppercase">
            si
            <input
              id="option2"
              className="m-2"
              type="radio"
              name='esterilizacion'
              value={'si'}
              onChange={(event) => setEsterilizacion(event.target.value)}
            />
          </label>
          <label htmlFor="esterilizacion" className="uppercase">
            no
            <input
              id="option3"
              className="m-2"
              type="radio"
              name='esterilizacion'
              value={'no'}
              onChange={(event) => setEsterilizacion(event.target.value)}
            />
          </label>
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-t-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(event) => setSintomas(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="esterilizacion"
            className="block text-gray-700 uppercase font-bold mb-2"
          >
            ¿Paciente nuevo?
          </label>
          <input
            className="m-2"
            id="cbox1"
            type="checkbox"
            value={masInfo}
            onChange={(event) => setMasInfo(event.target.checked)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Guardar cambios" : "Agregar Paciente"}
        />
        <input
          type="submit"
          className="bg-indigo-600 w-full  mt-2 p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={"Datos último paciente ingresado"}
        />
      </form>
    </div>
  );
};

export default Form;
