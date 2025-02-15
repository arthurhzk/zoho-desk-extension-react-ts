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
import styled from 'styled-components';
import { Title } from '@/components/title';
import LogoZoho from '@/components/logo-zoho';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 100%;
  max-width: 400px;
`;

const StyledInput = styled(Input)`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 20px;
`;

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
      <LogoZoho />
      <Logo />
      <FormContainer>
        <Title>Registrar Tokens Mercado Livre</Title>
        {mercadoLivreData.loading && <Loader />}
        {mercadoLivreData.error && (
          <>
            <StyledInput
              value={clientID.value}
              onChange={clientID.handleChange}
              placeholder="Client ID"
              type="text"
            />
            <StyledInput
              value={clientSecret.value}
              onChange={clientSecret.handleChange}
              placeholder="Client Secret"
              type="text"
            />
            <StyledInput
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
            {status && <ErrorMessage>{status}</ErrorMessage>}
          </>
        )}
      </FormContainer>
      <Footer />
    </AppContainer>
  );
};

export default RegisterMercadoLivrePage;
