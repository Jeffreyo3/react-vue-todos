import { useState } from "react";

export default function TodoForm(props) {
  const [formValue, setFormValue] = useState("");
  const { todos, setTodos, incrementId, nextId } = props;
  function handleChange(event) {
    setFormValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
      id: nextId,
      name: formValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setFormValue("");
    incrementId();
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
      <button type="submit" disabled={formValue.length < 1}>Add</button>
    </form>
  );
}
