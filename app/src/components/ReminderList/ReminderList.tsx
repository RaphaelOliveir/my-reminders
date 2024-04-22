import React from 'react';

const ListaLembretes = ({ lembretes }) => {
 return (
    <ul>
      {lembretes.map((lembrete, index) => (
        <li key={index}>{lembrete.nome} - {lembrete.data}</li>
      ))}
    </ul>
 );
};

export default ListaLembretes;
