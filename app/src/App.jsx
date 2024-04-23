import { useState } from 'react'
import { MdOutlineLibraryBooks } from "react-icons/md";

import './App.scss'

import ReminderList from './components/ReminderList/ReminderList'
import Reminder from './components/Reminder/Reminder';

function App() {
  const [reminders, setReminders] = useState([]);

  const addReminder = (newReminder) => {
    setReminders([...reminders, newReminder]
      .sort((longer, closer) =>
        new Date(longer.date) - new Date(closer.date)));
  };

  return (
    <>
      <div className='title'>
        <MdOutlineLibraryBooks size={50} color='#6B728E' />
        <h1>My Reminders</h1>
      </div>

      <Reminder onAdd={addReminder} />

      <hr />

      <ReminderList reminders={reminders} updateReminders={addReminder} />
    </>
  )
}

export default App