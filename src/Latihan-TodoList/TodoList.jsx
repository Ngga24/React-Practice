import { useState } from "react";

function TodoList() {
  const [inputTodo, setInputTodo] = useState("");
  const [arrayTodo, setArrayTodo] = useState([]);

  function handleSubmit() {
    if (inputTodo.trim() === "") return;

    const newTodo = {
      text: inputTodo,
      completed: false
    };

    setArrayTodo([...arrayTodo, newTodo]); 

    setInputTodo("");

    console.log("Todo disimpan:", [...arrayTodo, newTodo]); 
  }

  function toggleCompleted(index) {
    const updateTodo = arrayTodo.map((todo, x) => {
      if (index === x) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setArrayTodo(updateTodo);
  }

  return (
    <div>
      <h1>Todo List</h1>
      
      <input
        type="text"
        placeholder="Masukkan todo..."
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {arrayTodo.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleCompleted(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
