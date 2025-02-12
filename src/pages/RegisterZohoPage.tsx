import React from 'react';
import { AppContainer } from '@/components/app-container';
import { Button } from '@/components/button';
import Footer from '@/components/footer/footer';
import { Input } from '@/components/input';
import Logo from '@/components/logoLogin/logo';
import { Navbar } from '@/components/navbar/navbar';
import { OrgID } from '@/interfaces/OrgID';
import useSignCompanyData from '@/hooks/useSignCompanyData';
import useInputChange from '@/hooks/useInputChange';

const RegisterZohoPage: React.FC<OrgID> = ({ orgID }) => {
  const { loading, signCompanyData } = useSignCompanyData(orgID);

  const { value: clientID, handleChange: handleClientID } = useInputChange('');
  const { value: clientSecret, handleChange: handleClientSecret } =
    useInputChange('');

  const handleRegisterClick = () => {
    signCompanyData(clientID, clientSecret);
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
      <Button onClick={handleRegisterClick} disabled={loading}>
        {loading ? 'Carregando...' : 'Cadastrar'}
      </Button>
      <Footer />
    </AppContainer>
  );
};

export default RegisterZohoPage;
