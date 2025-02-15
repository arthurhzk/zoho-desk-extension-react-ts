import React, { useEffect } from 'react';
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
import Loader from '@/components/loader';
import styled from 'styled-components';
import { Title } from '@/components/title';

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

const RegisterZohoPage: React.FC<OrgID> = ({ orgID }) => {
  const registerZohoData = useRegisterZohoData(orgID);
  const zohoData = useCheckCompany(orgID, 'checkzoho');
  const clientID = useInputChange('');
  const clientSecret = useInputChange('');

  const handleRegisterClick = () => {
    registerZohoData.signCompanyData(clientID.value, clientSecret.value);
  };

  useEffect(() => {
    zohoData.signCompanyData();
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <Logo />
      <FormContainer>
        <Title>Registrar Tokens Zoho</Title>
        {zohoData.loading && <Loader />}
        {zohoData.error && (
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
            <Button
              onClick={handleRegisterClick}
              disabled={registerZohoData.loading || zohoData.loading}
            >
              {registerZohoData.loading || zohoData.loading
                ? 'Carregando...'
                : 'Cadastrar'}
            </Button>
            {registerZohoData.errorMessage && (
              <ErrorMessage>{registerZohoData.errorMessage}</ErrorMessage>
            )}
          </>
        )}
      </FormContainer>
      <Footer />
    </AppContainer>
  );
};

export default RegisterZohoPage;
