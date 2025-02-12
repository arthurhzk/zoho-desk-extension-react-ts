import React from 'react';
import { AppContainer } from '@/components/app-container';
import { Button } from '@/components/button';
import useInputChange from '@/hooks/useInputChange';
import Footer from '@/components/footer/footer';
import { Input } from '@/components/input';
import Logo from '@/components/logoLogin/logo';
import { Navbar } from '@/components/navbar/navbar';
import useFetchData from '@/hooks/useSignCompanyMercadoLivre';
import { OrgID } from '@/interfaces/OrgID';

const RegisterMercadoLivrePage: React.FC<OrgID> = ({ orgID }) => {
  const { value: clientID, handleChange: handleClientID } = useInputChange('');
  const { value: clientSecret, handleChange: handleClientSecret } =
    useInputChange('');
  const { value: code, handleChange: handleAccessCode } = useInputChange('');

  const { loading, fetchData } = useFetchData(
    `http://localhost:4001/api/credentials/client_id/${clientID}/client_secret/${clientSecret}/org_id/${orgID}/code/${code}`
  );

  const signCompanyData = async () => {
    await fetchData();
  };

  const url = 'https://www.google.com/';

  const generateAccessCode = () => {
    window.open(
      `https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${clientID}&redirect_uri=${url}`
    );
  };

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
      <Input
        value={code}
        onChange={handleAccessCode}
        placeholder="Code"
        type="text"
      />
      <Button onClick={generateAccessCode} disabled={loading}>
        {loading ? 'Carregando...' : 'Buscar Access Code'}
      </Button>
      <Button onClick={signCompanyData} disabled={loading}>
        {loading ? 'Carregando...' : 'Cadastrar'}
      </Button>
      <Footer />
    </AppContainer>
  );
};

export default RegisterMercadoLivrePage;
