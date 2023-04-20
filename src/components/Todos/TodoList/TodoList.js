import Todo from '../Todo/Todo';

function TodoList({ todos, deleteTodo, handleCompleteClick }) {
  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          id={index}
          deleteTodo={deleteTodo}
          todo={todo}
          handleCompleteClick={handleCompleteClick}
        />
      ))}
    </>
  );
}

export default TodoList;
