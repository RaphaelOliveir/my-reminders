/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import axios from "axios";

import "./ReminderListStyle.scss";

const ReminderList = ({ myReminders, updateReminders }) => {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReminders = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://reminders-api.azurewebsites.net/api/Reminder/GetReminders"
      );
      setReminders(response.data);
      setLoading(false);
    };

    fetchReminders();
  }, [myReminders, updateReminders]);

  const deleteReminder = async (id) => {
    try {
      await axios.delete(
        `https://reminders-api.azurewebsites.net/api/Reminder/DeleteReminder?id=${id}`
      ).then(response => {
        alert(response.data)
      })
      const updatedReminders = reminders.filter(reminder => reminder.id !== id);
      setReminders(updatedReminders);
    } catch (error) {
      alert("Erro ao tentar deletar lembrete.");
    }
  }

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    return formattedDate;
  };

  return (
    <>
      <h2>Lista de lembretes</h2>
      {loading ? (
        <div className="loading">
          <span>Carregando...</span>
          <IoReload size={30} color='#6B728E' />
        </div>
      ) : (
        reminders.map((reminder, index) => {
          let group = true;
          for (let i = index - 1; i >= 0; i--) {
            if (reminders[i].data === reminder.data) {
              group = false;
              break;
            }
          }

          return (
            <div key={reminder.id}>
              {
                group
                &&
                <h3>
                  {formatDate(reminder.data)}
                </h3>
              }
              <ul>
                <li>
                  <div className="card">
                    {reminder.nome}
                    <MdDelete
                      color="red"
                      cursor="pointer"
                      data-testid="delete-reminder-icon"
                      onClick={() => deleteReminder(reminder.id)}
                    />
                  </div>
                </li>
              </ul>
            </div>
          );
        })
      )}
    </>
  );
};

export default ReminderList;