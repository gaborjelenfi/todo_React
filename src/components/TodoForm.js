import React, { useState, useEffect, useRef } from 'react';
import Button from '../UI/Button';

import classes from './TodoForm.module.css';

function TodoForm(props) {
  const { edit } = props;
  const [input, setInput] = useState(edit ? edit.text : '');

  const inputRef = useRef(null);

  useEffect(() => {
    setInput(edit.text);
    inputRef.current.focus();
  }, [edit]);

  // after submitting the input 
  function submitHandler(event) {
    event.preventDefault();

    // if editing, change the value of input to the selected task's text
    if (edit.id) {
      props.changeUpdatedTask({
        id: edit.id,
        text: input,
        isComplete: edit.isComplete,
      });
    }
    // if not editing, create a new task 
    else {
      props.onSubmit({
        id: new Date().valueOf(),
        text: input,
        isComplete: false,
      });
    }

    setInput('');
  }

  // register every keystroke to input const
  function changeHandler(event) {
    setInput(event.target.value);
  }

  // render the input form with a submit button
  return (
    <form onSubmit={submitHandler}>
      <input
        className={classes.input__text}
        type="text"
        name="task"
        id="task"
        placeholder="Add new task here"
        ref={inputRef}
        value={input}
        onChange={changeHandler}
      />
      <Button edit={edit} onClick={submitHandler} />
    </form>
  );
}

export default TodoForm;
