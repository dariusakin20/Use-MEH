import React from 'react';
import { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text'className='todo-input'value={value} placeholder='Enter new task here'
    onChange={handleChange}
      />
      <button type='submit' className='buttons'>
        Add Task
      </button>
    </form>
  );
};
