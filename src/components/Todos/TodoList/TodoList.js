import Todo from '../Todo/Todo';

function TodoList({ todos, deleteTodo, handleCompleteClick }) {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          deleteTodo={deleteTodo}
          todo={todo}
          handleCompleteClick={handleCompleteClick}
        />
      ))}
    </>
  );
}

export default TodoList;
