import { useState } from "react";
import ReactHeader from "./components/ReactHeader.jsx";
import dummyData from "./dummyData.json";

function App() {
  const [todos, setTodos] = useState(dummyData);
  const [formValue, setFormValue] = useState("");

  function handleChange(event) {
    setFormValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      name: formValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleComplete(event) {
    const updateCompleted = todos.map((item) => {
      if (Number(event.target.id) === item.id) {
        return { ...item, completed: !item.completed };
      } else return item;
    });
    setTodos(updateCompleted);
  }

  function deleteCompleted() {
    const filterDeleted = todos.filter((item) => !item.completed);
    setTodos(filterDeleted);
  }

  function deleteTodo(event) {
    event.stopPropagation();
    const removeDeleted = todos.filter((item) => {
      return item.id !== Number(event.target.id);
    });
    setTodos(removeDeleted);
  }

  return (
    <div id="app">
      <ReactHeader message={"Welcome to your ReactJS Todos App"} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo">New Todo </label>
        <input
          id="newTodo"
          name="newTodo"
          value={formValue}
          onChange={handleChange}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
      <button onClick={deleteCompleted}>Clear Completed</button>
      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className={item.completed ? "completed" : null}
            onClick={toggleComplete}
          >
            {item.name}{" "}
            <button id={item.id} onClick={deleteTodo}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
