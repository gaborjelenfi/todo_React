import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import classes from './Todo.module.css';

function Todo(props) {

  const { todos, completeHandler, deleteHandler, updateHandler } = props;

  // render the new todo task under the input form
  return todos.map((todo) => (
    <div className={todo.isComplete ? `${classes.todo__container} ${classes.completed}` : classes.todo__container} key={todo.id}>
      <div onClick={() => completeHandler(todo.id)} className={classes.todo__textbox}>
        <p className={classes.todo__text}>{todo.text}</p>
      </div>
      <div className={classes.todo__icons}>
        <div>
        <FontAwesomeIcon onClick={() => updateHandler(todo.id, todo.text, todo.isComplete)} className={classes.todo__icon_edit} icon={faEdit} />
        </div>
        <div>
        <FontAwesomeIcon onClick={() => deleteHandler(todo.id)} className={classes.todo__icon_trash} icon={faTrash} />
        </div>
      </div>
    </div>
  ));
}

export default Todo;
