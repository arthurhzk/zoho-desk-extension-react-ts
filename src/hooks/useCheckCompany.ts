import { useState } from 'react';
import axios from 'axios';

const useCheckCompany = (orgID: string) => {
  const [loading, setLoading] = useState(false);
  const [clientID, setClientID] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [tokenData, setTokenData] = useState('');

  const signCompanyData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4001/api/credentials/client_id/${clientID}/client_secret/${clientSecret}/org_id/${orgID}`
      );
      setTokenData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    clientID,
    setClientID,
    clientSecret,
    setClientSecret,
    tokenData,
    signCompanyData
  };
};

export default useCheckCompany;
