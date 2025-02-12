import { useState } from 'react';
import { AppContainer } from '@/components/app-container';
import { Button } from '@/components/button';
import Footer from '@/components/footer/footer';
import { Navbar } from '@/components/navbar/navbar';
import RegisterMercadoLivrePage from '@/pages/RegisterMercadoLivrePage';
import RegisterZohoPage from '@/pages/RegisterZohoPage';
import RegisterDepartmentPage from '@/pages/RegisterDepartmentPage';
import useZohoOrgID from '@/hooks/useZohoOrgID';
const App = () => {
  const [counter, setCounter] = useState(0);
  const { orgID } = useZohoOrgID();

  const handleCounter = () => {
    setCounter((prevCounter) =>
      prevCounter < 3 ? prevCounter + 1 : prevCounter
    );
  };

  const handleCountdownCounter = () => {
    setCounter((prevCounter) =>
      prevCounter > 0 ? prevCounter - 1 : prevCounter
    );
  };

  return (
    <>
      <AppContainer>
        <Navbar />
        {counter === 0 && <RegisterMercadoLivrePage orgID={orgID} />}
        {counter === 1 && <RegisterZohoPage orgID={orgID} />}
        {counter === 2 && <RegisterDepartmentPage orgID={orgID} />}
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
            disabled={counter === 3}
            onClick={() => handleCounter()}
          >
            +
          </Button>
        </div>
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;
