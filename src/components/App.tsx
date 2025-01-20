import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Input } from './input';
import { Button } from './button';
import { AppContainer } from './app-container';
import { Title } from './title';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [orgID, setOrgID] = useState('');
  const [clientID, setClientID] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [code, setAccessCode] = useState('')
  const [tokenData, setTokenData] = useState('')


  const signCompanyData = async () => {
    setLoading(true);
 

    try {
 
      const response = await axios.get(`http://localhost:4001/api/credentials/client_id/${clientID}/client_secret/${clientSecret}/org_id/${orgID}/code/${code}`);
      console.log("Resposta do servidor:", response.data);
      setTokenData(JSON.stringify(response.data))
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    } finally {
      setLoading(false);
    }
  };

  const url = "https://www.google.com/"
  const generateAccessCode = () => {
      window.open(`https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${clientID}&redirect_uri=${url}`)
  }

  const handleClientID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientID(event.target.value);
  };

  const handleClientSecret = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientSecret(event.target.value);
  };

  const handleAccessCode = (event:React.ChangeEvent<HTMLInputElement>) => {
    setAccessCode(event.target.value)
  }

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
      <Title>Z-Plugin</Title>
      <Title>Mercado Livre</Title>
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
        <Input
        value={code}
        onChange={handleAccessCode}
        placeholder="Code"
        type="text"
      />
      <Button onClick={generateAccessCode} disabled={loading}> {loading ? "Carregando..." : "Buscar Access Code"}</Button>
      <Button onClick={signCompanyData} disabled={loading}>
        {loading ? "Carregando..." : "Cadastrar"}
      </Button>

      <h1>{tokenData}</h1>

    </AppContainer>
  );
};

export default App;
