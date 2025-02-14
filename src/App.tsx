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

const App = () => {
  const [counter, setCounter] = useState(0);
  const [sign, setSign] = useState('Registrar');

  const { orgID } = useZohoOrgID();
  const { sign: fetchedSign, signCompanyData } = useCheckCompany(orgID, 'all');

  useEffect(() => {
    signCompanyData();
  }, []);

  useEffect(() => {
    setSign(fetchedSign);
  }, [fetchedSign]);

  const onButtonClick = () => {
    if (sign === 'Acessar') {
      setCounter(4);
    } else {
      handleCounter();
    }
  };

  const handleCounter = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter < 3 ? prevCounter + 1 : prevCounter;
      return newCounter;
    });
  };

  const handleCountdownCounter = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter > 0 ? prevCounter - 1 : prevCounter;
      return newCounter;
    });
  };

  return (
    <>
      <AppContainer>
        <Navbar />
        {counter === 0 && (
          <WelcomePage signData={onButtonClick} orgID={orgID} sign={sign} />
        )}
        {counter === 1 && <RegisterZohoPage orgID={orgID} />}
        {counter === 2 && <RegisterMercadoLivrePage orgID={orgID} />}
        {counter === 3 && <RegisterDepartmentPage orgID={orgID} />}
        {counter === 4 && <TicketsPage orgID={orgID} />}
        {sign !== 'Acessar' && counter > 0 && (
          <div style={{ display: 'flex', gap: '5px' }}>
            <Button
              style={{ opacity: counter === 0 ? 0.5 : 1 }}
              disabled={counter === 0}
              onClick={handleCountdownCounter}
            >
              -
            </Button>
            <Button
              style={{ opacity: counter === 3 ? 0.5 : 1 }}
              disabled={counter === 4}
              onClick={handleCounter}
            >
              +
            </Button>
          </div>
        )}
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;
