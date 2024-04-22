import React, { useState } from 'react';
import axios from 'axios';

const Reminder = () => {
 const [name, setName] = useState('');
 const [date, setDate] = useState('');

 const criarLembrete = async () => {  
      try {
        await axios.post('http://localhost:5285/api/Reminder/AddReminder', {
          name: "Comprar coisas",
          date: "2021-12-31"
        });
      } catch (error) {
        console.error('Erro ao criar o lembrete:', error);
        alert('Erro ao criar o lembrete.');
      }
 };

 return (
    <>
      <input
        type="text"
        placeholder="Ex: Comprar pão"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={criarLembrete}>Criar Lembrete</button>
    </>
 );
};

export default Reminder;