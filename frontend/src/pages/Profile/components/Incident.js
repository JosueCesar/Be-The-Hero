import React from 'react';

import { FiTrash2 } from 'react-icons/fi';

export default ({ id, title, description, value, handleDelete }) => {
  return(
    <li>
      <strong>CASO:</strong>
      <p>{title}</p>

      <strong>DESCRIÇÃO:</strong>
      <p>{description}</p>

      <strong>VALOR:</strong>
      <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value)}</p>

      <button onClick={handleDelete} type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
      </button>
    </li>
  );
}