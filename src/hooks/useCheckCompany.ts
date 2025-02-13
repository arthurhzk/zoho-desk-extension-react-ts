import { useState } from 'react';
import axios from 'axios';

const useCheckCompany = (orgID: string, company: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState([]);
  const signCompanyData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4001/api/${company}/${orgID}`
      );
      if (response.status !== 200) {
        throw new Error('Erro ao fazer a requisição.');
      }
      setData(response.data);
    } catch (error) {
      setError('Erro ao fazer a requisição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    signCompanyData
  };
};

export default useCheckCompany;
