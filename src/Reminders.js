import React, { useState } from 'react';

export const Reminders = () => {
  const [reminderValue, setReminderValue] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [reminders, setReminders] = useState([]);

  const handleChange = (e) => {
    setReminderValue(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(parseInt(e.target.value, 10));
  };

  const setReminder = () => {
    if (!reminderValue || !selectedTime) {
      alert('Please enter a reminder and select a time');
      return;
    }

    const reminderTime = new Date();
    reminderTime.setMinutes(reminderTime.getMinutes() + selectedTime);

    setTimeout(() => {
      alert(`Here's your reminder: ${reminderValue}`);
    }, selectedTime * 60000);

    setReminders([...reminders, { text: reminderValue, time: reminderTime }]);
    setReminderValue('');
    setSelectedTime(null);
  };

  const deleteReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={reminderValue}
          placeholder="Enter a new reminder here"
          onChange={handleChange}
        />
        <label>
          Time:
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">Select Time</option>
            <option value="1">1 minutes</option>
            <option value="30">30 minutes</option>
            <option value="50">50 minutes</option>
            <option value="90">90 minutes</option>
          </select>
        </label>
        <button type="button" onClick={setReminder}>
          Set Reminder
        </button>
      </form>

      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            {reminder.text} - {reminder.time.toLocaleTimeString()}
            <button onClick={() => deleteReminder(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
