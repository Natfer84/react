import React, { useState } from "react";
import "../hojas-de-estilo/todoList.css";
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
  //id: Date.now() genera un id único que le otorga a cada elemento del array
  const tareas = () => {
    if (tarea.trim() !== "")
      setArrayTarea([...arrayTareas, { id: Date.now(), tarea }]);
    setTarea("");
  };
  //console.log(arrayTareas);

  return (
    
    <div className="containerTasks">
     
      <input
        type="text"
        value={tarea}
        onChange={handleChange}
        className="containerTasks__Input"
      />

      <ul className="containerTasks__Ul">
        {arrayTareas.map((posicion) => (
          <li key={posicion.id} className="containerTasks__Ul__Li">
            {posicion.tarea}{" "}
            <div
              className="containerTasks__ButtonEliminar"
              onClick={() => {
                setArrayTarea(
                  arrayTareas.filter((tarea) => tarea.id !== posicion.id)
                );
              }}
            >
              Eliminar
            </div>
          </li>
        ))}
      </ul>

        <div className="container_button">
      <div
        className="containerTasks__ButtonAñadirTarea"
        onClick={() => {
          tareas();
        }}
      >
        Añadir tarea
      </div>

      <div
        className="containerTasks__ButtonEliminarUltTarea"
        onClick={() => {
          setArrayTarea(arrayTareas.slice(0, -1));
        }}
      >
        Eliminar última tarea
      </div>

      </div>
    </div>
  );
};

export default TodoList;
