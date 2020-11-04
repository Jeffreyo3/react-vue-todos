import { useState } from "react";
import ReactHeader from "./components/ReactHeader.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodoForm.jsx";

import dummyData from "./dummyData.json";

function App() {
  const [todos, setTodos] = useState(dummyData);
  const [nextId, setNextId] = useState(dummyData.length+1);

  function incrementId () {
    setNextId(nextId+1)
  }

  function toggleComplete(event) {
    const updateCompleted = todos.map((item) => {
      if (Number(event.target.getAttribute('name')) === item.id) {
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
      return item.id !== Number(event.target.name);
    });
    setTodos(removeDeleted);
  }

  return (
    <div id="app">
      <ReactHeader message={"Welcome to your ReactJS Todos App"} />

      <TodoForm todos={todos} setTodos={setTodos} incrementId={incrementId} nextId={nextId}/>

      <button onClick={deleteCompleted}>Clear Completed</button>

      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
