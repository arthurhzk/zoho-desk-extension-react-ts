import React, { useEffect, useState } from 'react';
import axios from "axios";
import { AppContainer } from '../components/app-container';
import { Button } from '../components/button';
import Footer from '../components/footer/footer';
import { Input } from '../components/input';
import Logo from '../components/logoLogin/logo';
import { Navbar } from '../components/navbar/navbar';

const RegisterZohoPage = () => {
  const [loading, setLoading] = useState(false);
  const [orgID, setOrgID] = useState('');
  const [clientID, setClientID] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [tokenData, setTokenData] = useState('')

  const signCompanyData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:4001/api/credentials/client_id/${clientID}/client_secret/${clientSecret}/org_id/${orgID}`);
      setTokenData(response.data)
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleClientID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientID(event.target.value);
  };

  const handleClientSecret = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientSecret(event.target.value);
  };

  useEffect(() => {
    ZOHODESK.extension.onload().then(() => {
      setLoading(false);

      
      ZOHODESK.get('portal.id').then((data) => {
        setOrgID(data['portal.id']);
      });

    });
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <Logo />  
      <Input
        value={clientID}
        onChange={handleClientID}
        placeholder="Client ID"
        type="text"
      />
      <Input
        value={clientSecret}
        onChange={handleClientSecret}
        placeholder="Client Secret"
        type="text"
      />
      <Button onClick={signCompanyData} disabled={loading}>
        {loading ? "Carregando..." : "Cadastrar"}
      </Button>
      <Footer />
    </AppContainer>
  );
};

export default RegisterZohoPage;
