export default function TodoItem(props) {
  const { item, toggleComplete, deleteTodo } = props;
  return (
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
  );
}
