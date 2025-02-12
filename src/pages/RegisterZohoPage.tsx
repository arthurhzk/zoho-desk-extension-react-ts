import React from 'react';
import { AppContainer } from '@/components/app-container';
import { Button } from '@/components/button';
import Footer from '@/components/footer/footer';
import { Input } from '@/components/input';
import Logo from '@/components/logoLogin/logo';
import { Navbar } from '@/components/navbar/navbar';
import { OrgID } from '@/interfaces/OrgID';
import useInputChange from '@/hooks/useInputChange';
import useCheckCompany from '@/hooks/useCheckCompany';
import useRegisterZohoData from '@/hooks/useRegisterZohoData';

const RegisterZohoPage: React.FC<OrgID> = ({ orgID }) => {
  const registerZohoData = useRegisterZohoData(orgID);
  const zohoData = useCheckCompany(orgID, 'checkzoho');
  const clientID = useInputChange('');
  const clientSecret = useInputChange('');

  const handleRegisterClick = () => {
    registerZohoData.signCompanyData(clientID.value, clientSecret.value);
  };

  return (
    <AppContainer>
      <Navbar />
      <Logo />
      <Input
        value={clientID.value}
        onChange={clientID.handleChange}
        placeholder="Client ID"
        type="text"
      />
      <Input
        value={clientSecret.value}
        onChange={clientSecret.handleChange}
        placeholder="Client Secret"
        type="text"
      />
      <Button
        onClick={handleRegisterClick}
        disabled={registerZohoData.loading || zohoData.loading}
      >
        {registerZohoData.loading || zohoData.loading
          ? 'Carregando...'
          : 'Cadastrar'}
      </Button>
      <Footer />
    </AppContainer>
  );
};

export default RegisterZohoPage;
