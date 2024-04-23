import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ReminderListStyle.scss";

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

      {lembretes.map((lembrete, index) => {
        let agrupar = true;
        for (let i = index - 1; i >= 0; i--) {
          if (lembretes[i].data === lembrete.data) {
            agrupar = false;
            break;
          }
        }

        return (
          <React.Fragment key={lembrete.id}>
            {agrupar && <h3>{lembrete.data}</h3>}
            <ul>
              <li>
                <div className="card">{lembrete.nome}</div>
              </li>
            </ul>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ListaLembretes;
