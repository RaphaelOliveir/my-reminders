import { useState } from 'react'

import './App.css'

import ListaLembretes from './components/ReminderList/ReminderList'
import Reminder from './components/Reminder/Reminder';

function App() {
  const [lembretes, setLembretes] = useState([]);

  const adicionarLembrete = (novoLembrete) => {
     setLembretes([...lembretes, novoLembrete].sort((a, b) => new Date(a.data) - new Date(b.data)));
  };

  return (
    <>
      <Reminder onAdicionar={adicionarLembrete}/>
      <ListaLembretes lembretes={lembretes}/>
    </>
  )
}

export default App
