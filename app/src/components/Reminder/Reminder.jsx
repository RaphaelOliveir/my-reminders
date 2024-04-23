/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

import "./ReminderStyle.scss";

const Reminder = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const validateForm = () => {
    if (name.trim() === "" || date.trim() === "") {
      alert("Todos os campos são obrigatórios");
      return false;
    }
    return true;
  };

  const createReminder = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append('name', name);
      params.append('date', date);

      await axios.post(
        "https://reminders-api.azurewebsites.net/api/Reminder/AddReminder",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
        }
      ).then(response => {
        alert(response.data)
      })

      onAdd({ name: name, date: date })
    } catch (error) {
      alert("Erro ao criar lembrete.");
    }
  };

  return (
    <div className="container">
      <div className="inputs-group">
        <div className="name">
          <h3>Nome:</h3>
          <input
            type="text"
            placeholder="Ex: Comprar pão"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="date">
          <h3>Data:</h3>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <button onClick={createReminder}>Criar lembrete</button>
    </div>
  );
};

export default Reminder;