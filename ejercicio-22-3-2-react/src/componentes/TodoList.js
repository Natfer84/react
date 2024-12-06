import React, { useState } from "react";

const TodoList = () => {
  /* useState para el input */
  const [tarea, setTarea] = useState("");
  /* useState para el array */
  const [arrayTareas, setArrayTarea] = useState([]);
  //const [borrarArray, setBorrarArray] = useState(arrayTareas);

 

  /*funcion para tratar los datos del input*/
  const handleChange = (event) => {
    setTarea(event.target.value);
  };

  /*funcion para meter tarea en array*/
  const tareas = () => {
    if (tarea.trim() !== "") setArrayTarea([...arrayTareas, {id: Date.now(), tarea }]);
    setTarea("");
  };
  console.log(arrayTareas);

  

  return (
    <div>
      <input type="text" value={tarea} onChange={handleChange} />

      <ul>
        {arrayTareas.map((posicion) => (
          <li key={posicion.id}>
            {posicion.tarea}{" "}
            <button
              onClick={() => {
                setArrayTarea(arrayTareas.filter(tarea => tarea.id !== posicion.id ))
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          tareas();
        }}
      >
        Añadir tarea
      </button>

      <button
        onClick={() => {
          setArrayTarea(arrayTareas.slice(0,-1));
        }}
      >
        Eliminar última tarea
      </button>

    </div>
  );
};

export default TodoList;
