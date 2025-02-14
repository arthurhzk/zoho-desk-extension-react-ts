import { useState } from 'react';
import axios from 'axios';

const useRegisterMercadoLivreData = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>();

  const registerData = async (
    clientID: string,
    clientSecret: string,
    orgID: string,
    code: string
  ) => {
    setLoading(true);
    setStatus(null);
    try {
      const response = await axios.post(url, {
        clientID,
        clientSecret,
        orgID,
        code
      });
      setData(response.data);
      setSuccess(true);
      setStatus('Dados do Mercado Livre criados com sucesso!');
    } catch (error) {
      setSuccess(false);
      setStatus('Erro ao fazer a requisição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, status, success, registerData };
};

export default useRegisterMercadoLivreData;
