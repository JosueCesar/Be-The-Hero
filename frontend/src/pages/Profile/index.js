import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import Incident from './components/Incident';

import logoImg from '../../assets/logo.svg';

export default () => {
  const [incidents, setIncidents] = useState([]);
  
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  if(!ongId){
    history.push('/');
  }

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId, 
      },
    }).then(res => {
      setIncidents(res.data);
    })
  }, [ongId]);

  const handleDeleteIncident = async id => {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch(err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  }

  return(
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <Incident
            key={incident.id}
            title={incident.title}
            description={incident.description}
            value={incident.value}
            handleDelete={() => handleDeleteIncident(incident.id)}
          />
        ))}
      </ul>
    </div>
  );
}