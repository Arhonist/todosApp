import Todo from './Todo';

function TodoList({ todos, deleteTodo }) {
  return (
    <>
      {todos.map((text, index) => (
        <Todo key={index} id={index} deleteTodo={deleteTodo} todoText={text} />
      ))}
    </>
  );
}

export default TodoList;
