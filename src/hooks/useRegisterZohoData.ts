import { useState } from 'react';
import axios from 'axios';

const useRegisterZohoData = (orgID: string) => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState();
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const signCompanyData = async (clientID: string, clientSecret: string) => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const response = await axios.post(
        `http://localhost:4001/api/zohocredentials`,
        {
          clientID,
          clientSecret,
          orgID
        }
      );
      setApiData(response.data);
    } catch (error) {
      setErrorMessage(
        'Erro ao fazer a requisição. Por favor, tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, apiData, errorMessage, signCompanyData };
};

export default useRegisterZohoData;
