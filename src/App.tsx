import { useEffect, useState } from 'react';
import { AppContainer } from '@/components/app-container';
import { Button } from '@/components/button';
import Footer from '@/components/footer/footer';
import { Navbar } from '@/components/navbar/navbar';
import RegisterMercadoLivrePage from '@/pages/RegisterMercadoLivrePage';
import RegisterZohoPage from '@/pages/RegisterZohoPage';
import RegisterDepartmentPage from '@/pages/RegisterDepartmentPage';
import TicketsPage from '@/pages/TicketsPage';
import useZohoOrgID from '@/hooks/useZohoOrgID';
import WelcomePage from '@/pages/WelcomePage';
import useCheckCompany from './hooks/useCheckCompany';
import ButtonContainer from '@/components/button-container';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [sign, setSign] = useState('Registrar');

  const { orgID } = useZohoOrgID();
  const { sign: fetchedSign, signCompanyData } = useCheckCompany(orgID, 'all');

  useEffect(() => {
    signCompanyData();
    setSign(fetchedSign);
  }, [fetchedSign]);

  const handleSignData = () => {
    setCounter(sign === 'Acessar' ? 4 : Math.min(counter + 1, 3));
  };

  const handleCounter = (increment: boolean) => {
    setCounter((prevCounter) => {
      const newCounter = increment
        ? Math.min(prevCounter + 1, 4)
        : Math.max(prevCounter - 1, 0);
      return newCounter;
    });
  };

  const renderPage = () => {
    switch (counter) {
      case 0:
        return (
          <WelcomePage signData={handleSignData} orgID={orgID} sign={sign} />
        );
      case 1:
        return <RegisterZohoPage orgID={orgID} />;
      case 2:
        return <RegisterMercadoLivrePage orgID={orgID} />;
      case 3:
        return <RegisterDepartmentPage orgID={orgID} />;
      case 4:
        return <TicketsPage orgID={orgID} />;
      default:
        return 0;
    }
  };

  return (
    <>
      <AppContainer>
        <Navbar />
        {renderPage()}
        {sign !== 'Acessar' && counter > 0 && (
          <ButtonContainer>
            <Button
              style={{ opacity: counter === 0 ? 0.5 : 1 }}
              disabled={counter === 0}
              onClick={() => handleCounter(false)}
            >
              -
            </Button>
            <Button
              style={{ opacity: counter === 4 ? 0.5 : 1 }}
              disabled={counter === 4}
              onClick={() => handleCounter(true)}
            >
              +
            </Button>
          </ButtonContainer>
        )}
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;
