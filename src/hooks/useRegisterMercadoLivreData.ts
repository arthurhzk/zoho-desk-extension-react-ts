import { useState } from 'react';
import axios from 'axios';

const useRegisterMercadoLivreData = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const registerData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError('Erro ao fazer a requisição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, registerData };
};

export default useRegisterMercadoLivreData;
