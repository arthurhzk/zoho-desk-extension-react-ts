import { useState, useEffect } from 'react';
import axios from 'axios';
import { Tickets } from '@/interfaces/Tickets';

const useFetchTickets = (orgID: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tickets, setTickets] = useState<Tickets>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTickets = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:4001/api/fetchtickets/${orgID}`
      );
      setTickets(response.data.data.data);
    } catch (error) {
      setError('Erro ao fazer a requisição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, tickets, error, fetchTickets };
};

export default useFetchTickets;
