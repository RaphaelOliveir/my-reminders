/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";

import "./ReminderListStyle.scss";

const ListaLembretes = ({ meusLembretes, atualizarLembretes }) => {
 const [lembretes, setLembretes] = useState([]);

 useEffect(() => {
    const fetchLembretes = async () => {
      const response = await axios.get(
        "https://reminders-api.azurewebsites.net/api/Reminder/GetReminders"
      );
      setLembretes(response.data);
    };

    fetchLembretes();
 }, [meusLembretes, atualizarLembretes]);

 const deleteReminder = async (id) => {
  try {
    await axios.delete(
      `https://reminders-api.azurewebsites.net/api/Reminder/DeleteReminder?id=${id}`
    ).then(reponse => {
      alert(reponse.data)
    })
    const updatedLembretes = lembretes.filter(lembrete => lembrete.id !== id);
    setLembretes(updatedLembretes);
  } catch (error) {
    alert("Erro ao tentar deletar lembrete.");
  }
 }

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
                <div className="card">
                  {lembrete.nome}
                  <MdDelete
                    color="red"
                    cursor="pointer"
                    onClick={() => deleteReminder(lembrete.id)}
                  />
                </div>
              </li>
            </ul>
          </React.Fragment>
        );
      })}
    </>
 );
};

export default ListaLembretes;
