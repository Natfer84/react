import React, { useState } from "react";

const TodoList = () => {
  /* useState para el input */
  const [tarea, setTarea] = useState("");
    /* useState para el array */
  const [arrayTareas, setArrayTarea] = useState([]);
   /* useState para borrar un elemento de array */
  const [arrayBorar, setArrayBorrar] = useState(arrayTareas);



  /*funcion para tratar los datos del input*/
  const handleChange = (event) => {
    setTarea(event.target.value);
  };

  /*funcion para meter tareas en array*/
  const tareas = () => {
    if(tarea.trim() !== "")
      setArrayTarea([...arrayTareas, {tarea}]);
    setTarea("");
  }
 console.log(arrayTareas);

 const borrarTareas = () => {
  setArrayBorrar.filter([...arrayBorar]);
 }


 
////me he quedaddo creando una funcion para eliminar un elemento del array


  return (
    <div>
      <input type="text" value={tarea} onChange={handleChange}  />
      <ul>
        {arrayTareas.map((tarea, posicion) => (
          <li key={posicion}> {tarea.tarea} </li>
        ))}
      </ul>
      <button
        onClick={() => {tareas()}}
      >
        Añadir tarea
      </button>


      <button
        onClick= {() => {setArrayBorrar(
          arrayBorar.filter(a =>
            a.posicion !== tarea
          ))}}
      >
        Eliminar tarea
      </button>

    </div>
  );
};

export default TodoList;
