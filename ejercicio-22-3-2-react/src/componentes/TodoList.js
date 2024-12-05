import React, { useState } from "react";

const TodoList = () => {
  const [tarea, setTarea] = useState("");

  const handleChange = (event) => {
    setTarea(event.target.value);
  };

  /*funcion para meter tareas en array*/
  let arrayTareas = [];
  function tareas() {
    arrayTareas.push({ tarea });
    console.log(arrayTareas);
  }

  /* funcion para vaciar el input*/
  function limpiarInput() {
    if (tarea.trim() !== "") {
      setTarea("");
    }
  }

  return (
    <div>
      <input type="text" value={tarea} onChange={handleChange} />
      <ul>
        {arrayTareas.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
      <button
        onClick={() => {
          tareas();
          limpiarInput();
        }}
      >
        Añadir tarea
      </button>
    </div>
  );
};

export default TodoList;
