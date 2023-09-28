import React, { useState } from "react";
import '../stylesheets/ListaDeTareas.css'

import Tarea from './Tarea';
import TareaFormulario from './TareaFormulario';

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()){
      tarea.texto = tarea.texto.trim()
      const tareasActuales = [tarea, ...tareas]
      setTareas(tareasActuales)
    }
  };
  const eliminarTarea = id => {
    const tareasActuales = [...tareas].filter(tarea => tarea.id !== id)
    setTareas(tareasActuales)
  };

  const completarTarea = id => {
    for (let i = 0; i < tareas.length; i++) {
      if (tareas[i].id === id) {
        tareas[i].completada = !tareas[i].completada
      }
    }
    const tareasCompletas = [...tareas].filter(tarea => tarea.completada !== false)
    const tareasFaltantes = [...tareas].filter(tarea => tarea.completada !== true)
    const tareasActuales = [...tareasFaltantes, ...tareasCompletas]
    setTareas(tareasActuales)
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tarea-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}  
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;