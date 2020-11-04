import TodoItem from "./TodoItem.jsx";
export default function TodoList(props) {
  const { toggleComplete, deleteTodo, todos } = props;
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
