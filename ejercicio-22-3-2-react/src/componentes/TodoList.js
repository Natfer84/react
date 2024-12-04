


import React, { useState } from 'react';


const TodoList = () => {

  const [tarea, setTarea] = useState("");

  const handleChange = (event) => {
    setTarea(event.target.value);
  };
  function tareas () {
  let arrayTareas = [];
  arrayTareas.push({tarea})
}

  return (
    <div>
      <input type="text" value={tarea} onChange={handleChange} />
      <ul >
          {arrayTareas.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
        <button onChange={tareas}>añadir</button>

    
    </div>
  );
};

export default TodoList;


