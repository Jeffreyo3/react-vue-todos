import { useState } from "react";

export default function TodoForm(props) {
  const [formValue, setFormValue] = useState("");
  const { todos, setTodos } = props;
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
    setFormValue("");
  }

  return (
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
  );
}
