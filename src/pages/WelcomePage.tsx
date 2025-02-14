import React, { useEffect } from 'react';
import { AppContainer } from '@/components/app-container';
import Footer from '@/components/footer/footer';
import Logo from '@/components/logoLogin/logo';
import { Navbar } from '@/components/navbar/navbar';
import { Button } from '@/components/button';
import useCheckCompany from '@/hooks/useCheckCompany';
import Loader from '@/components/loader';

interface WelcomePageProps {
  orgID: string;
  sign: string;
  signData: () => void;
}

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
      <h4>Bem-vindo ao Z-Plugin + Mercado Livre</h4>
      <Button onClick={signData}>{sign}</Button>
      <Footer />
    </AppContainer>
  );
};

export default WelcomePage;
