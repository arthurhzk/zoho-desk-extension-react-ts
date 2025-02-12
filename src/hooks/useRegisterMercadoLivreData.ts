import { useState } from 'react';
import axios from 'axios';

const useRegisterMercadoLivreData = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const registerData = async (
    clientID: string,
    clientSecret: string,
    orgID: string,
    code: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, {
        clientID,
        clientSecret,
        orgID,
        code
      });
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
