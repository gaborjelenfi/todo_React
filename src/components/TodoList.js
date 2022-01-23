import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    id: 0,
    text: '',
    isComplete: false,
  });

  function addTodo(todo) {
    if (!todo.text) return;

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  // change isComplete boolean value to the opposite of the current value. Need for add extra css class to a task as completed task
  function completeHandler(id) {
    const changedTaskStatus = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(changedTaskStatus);
  }

  // get selected task values
  function updateHandler(id, text, isComplete) {
    setEdit({ id, text, isComplete });
  }

  // After save the changes refresh the todo list and change the selected task's text to the new text.
  function changeUpdatedTask(changedTodo) {
    const updatedTodos = todos.map(todo => todo.id === changedTodo.id ? changedTodo : todo);
    setTodos(updatedTodos);
    setEdit({ id: 0, text: '', isComplete: false });
  }

  // simply remove the task that was deleted.
  function deleteHandler(id) {
    const changedTodoList = todos.filter(todo => todo.id !== id);
    setTodos(changedTodoList);
  }

  // render form field and todos below that.
  return (
    <div>
      <TodoForm
        edit={edit}
        onSubmit={addTodo}
        changeUpdatedTask={changeUpdatedTask}
      />
      <Todo
        todos={todos}
        completeHandler={completeHandler}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
      />
    </div>
  );
}

export default TodoList;
