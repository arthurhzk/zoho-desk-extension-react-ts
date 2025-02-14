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

const WelcomePage: React.FC<WelcomePageProps> = ({ orgID, sign, signData }) => {
  const { loading, signCompanyData } = useCheckCompany(orgID, 'all');

  useEffect(() => {
    signCompanyData();
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <Logo />
      {loading && <Loader />}
      <Title>Bem-vindo ao Z-Plugin + Mercado Livre</Title>
      <Button onClick={signData}>{sign}</Button>
      <Footer />
    </AppContainer>
  );
};

export default WelcomePage;
