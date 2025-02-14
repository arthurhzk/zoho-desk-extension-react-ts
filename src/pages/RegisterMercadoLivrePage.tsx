import React, { useEffect } from 'react';
import { AppContainer } from '@/components/app-container';
import { Button } from '@/components/button';
import useInputChange from '@/hooks/useInputChange';
import Footer from '@/components/footer/footer';
import { Input } from '@/components/input';
import Logo from '@/components/logoLogin/logo';
import { Navbar } from '@/components/navbar/navbar';
import { OrgID } from '@/interfaces/OrgID';
import useRegisterMercadoLivreData from '@/hooks/useRegisterMercadoLivreData';
import useCheckCompany from '@/hooks/useCheckCompany';
import Loader from '@/components/loader';

const RegisterMercadoLivrePage: React.FC<OrgID> = ({ orgID }) => {
  const clientID = useInputChange('');
  const mercadoLivreData = useCheckCompany(orgID, 'checkml');
  const clientSecret = useInputChange('');
  const code = useInputChange('');

  const { loading, registerData, status } = useRegisterMercadoLivreData(
    `http://localhost:4001/api/credentials`
  );

  const signCompanyData = async () => {
    await registerData(clientID.value, clientSecret.value, orgID, code.value);
  };

  useEffect(() => {
    mercadoLivreData.signCompanyData();
  }, []);

  const redirectURL = 'https://www.google.com/';

  const generateAccessCode = () => {
    window.open(
      `https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${clientID.value}&redirect_uri=${redirectURL}`
    );
  };

  return (
    <AppContainer>
      <Navbar />
      <Logo />
      {mercadoLivreData.loading && <Loader />}
      {mercadoLivreData.error && (
        <>
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
          <Input
            value={code.value}
            onChange={code.handleChange}
            placeholder="Code"
            type="text"
          />
          <Button onClick={generateAccessCode} disabled={loading}>
            {loading ? 'Carregando...' : 'Buscar Access Code'}
          </Button>
          <Button onClick={signCompanyData} disabled={loading}>
            {loading ? 'Carregando...' : 'Cadastrar'}
          </Button>
          <h3> {status && <h4>{status}</h4>}</h3>
        </>
      )}
      <Footer />
    </AppContainer>
  );
};

export default RegisterMercadoLivrePage;
