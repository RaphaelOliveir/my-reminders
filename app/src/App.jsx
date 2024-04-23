import { useState } from 'react'
import { MdOutlineLibraryBooks } from "react-icons/md";

import './App.scss'

import ListaLembretes from './components/ReminderList/ReminderList'
import Reminder from './components/Reminder/Reminder';

function App() {
  const [lembretes, setLembretes] = useState([]);

  const adicionarLembrete = (novoLembrete) => {
    setLembretes([...lembretes, novoLembrete].sort((a, b) => new Date(a.data) - new Date(b.data)));
  };

  return (
    <>
      <div className='title'>
        <MdOutlineLibraryBooks size={50} color='#6B728E' />
        <h1>My Reminders</h1>
      </div>

      <Reminder onAdicionar={adicionarLembrete} />

      <hr />

      <ListaLembretes lembretes={lembretes} atualizarLembretes={adicionarLembrete} />
    </>
  )
}

export default App
