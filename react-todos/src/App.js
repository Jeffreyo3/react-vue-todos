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
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className={item.completed ? "completed" : null}
            onClick={toggleComplete}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
