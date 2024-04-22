import React, { useState } from 'react';
import axios from 'axios';

const Reminder = () => {
 const [name, setName] = useState('');
 const [date, setDate] = useState('');

 const criarLembrete = async () => {
    if (!name || !date) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      try {
        const response = await axios.post('/api/lembretes', {
          name,
          date
        });
  
        if (response.status === 200) {
          alert('Lembrete criado com sucesso!');
          // Limpar o formulário ou atualizar a lista de lembretes
        }
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
