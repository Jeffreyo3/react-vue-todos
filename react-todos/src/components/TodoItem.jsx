export default function TodoItem(props) {
  const { item, toggleComplete, deleteTodo } = props;
  return (
    <li key={item.id} name={item.id} onClick={toggleComplete}>
      <p name={item.id} className={item.completed ? "completed" : null}>{item.name}</p>
      <button name={item.id} onClick={deleteTodo}>
        X
      </button>{" "}
    </li>
  );
}
