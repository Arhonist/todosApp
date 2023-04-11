import Todo from './Todo';

function TodoList({ todos, complTodos, deleteTodo, handleCompleteClick }) {
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
