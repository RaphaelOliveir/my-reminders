import React, { useState, useEffect } from "react";
import axios from "axios";

import './ReminderListStyle.scss';

interface Lembrete {
  id: number;
  nome: string;
  data: string;
}

const ListaLembretes = () => {
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);

  useEffect(() => {
    const fetchLembretes = async () => {
      const response = await axios.get(
        "http://localhost:5285/api/Reminder/GetReminders"
      );
      setLembretes(response.data);
    };

    fetchLembretes();
  }, []);

  return (
    <>
      <h2>Lista de lembretes:</h2>

      <ul>
        {lembretes.map((lembrete, index) => (
          <li key={index}>
            {lembrete.nome} - {lembrete.data}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaLembretes;
