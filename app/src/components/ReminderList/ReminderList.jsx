/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ReminderListStyle.scss";

const ListaLembretes = ({ meusLembretes, atualizarLembretes }) => {
 const [lembretes, setLembretes] = useState([]);

 useEffect(() => {
    const fetchLembretes = async () => {
      const response = await axios.get(
        "http://localhost:5285/api/Reminder/GetReminders"
      );
      setLembretes(response.data);
    };

    fetchLembretes();
 }, [meusLembretes, atualizarLembretes]);

 // Função para formatar a data
 const formatarData = (data) => {
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    return dataFormatada;
 };

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
            {agrupar && <h3>{formatarData(lembrete.data)}</h3>}
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
