import React, { useEffect } from 'react';
import { AppContainer } from '@/components/app-container';
import Footer from '@/components/footer/footer';
import Logo from '@/components/logoLogin/logo';
import { Navbar } from '@/components/navbar/navbar';
import { Button } from '@/components/button';
import useCheckCompany from '@/hooks/useCheckCompany';
import Loader from '@/components/loader';
import { Title } from '@/components/title';
import { WelcomePageProps } from '@/interfaces/WelcomePage';
import styled from 'styled-components';
import LogoZoho from '@/components/logo-zoho';

const WelcomeContainer = styled.div`
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

const ZohoImage = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const WelcomeTitle = styled(Title)`
  font-size: 1.5em;
  color: #0b72b9; /* Cor Azul da Zoho */
  margin-bottom: 20px;
`;

const WelcomeMessage = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #0b72b9; /* Cor Azul da Zoho */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #094a7a; /* Cor Azul Escuro da Zoho */
  }
`;

const WelcomePage: React.FC<WelcomePageProps> = ({ orgID, sign, signData }) => {
  const { loading, signCompanyData } = useCheckCompany(orgID, 'all');

  useEffect(() => {
    signCompanyData();
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <WelcomeContainer>
        <LogoZoho />
        <Logo />
        {loading && <Loader />}
        <WelcomeTitle>Bem-vindo ao Z-Plugin</WelcomeTitle>
        <WelcomeTitle>Mercado Livre</WelcomeTitle>
        {!loading && (
          <>
            <Button onClick={signData}>{sign}</Button>
            <WelcomeMessage>Estamos felizes em tê-lo conosco.</WelcomeMessage>
            <WelcomeMessage>
              Clique no botão acima para {sign.toLowerCase()} e começar a usar o
              Z-Plugin.
            </WelcomeMessage>
          </>
        )}
      </WelcomeContainer>
      <Footer />
    </AppContainer>
  );
};

export default WelcomePage;
