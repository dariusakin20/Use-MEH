import React from 'react'
import { useState } from 'react'

export const Reminders = () => {
  const [reminderValue, setReminderValue] = useState("");

  const handleChange = (e) => {
    setReminderValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text'className='todo-input'value={reminderValue} placeholder='Enter a new reminder here'
    onChange={handleChange}
      />
      <button type='submit' className='todo-btn'>
        Add Reminder
      </button>
    </form>
  );
}
