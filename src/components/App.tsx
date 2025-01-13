import { useEffect, useState } from 'react';
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [orgID, setOrgID] = useState('');
  const [clientID, setClientID] = useState('')
  const [clientSecret, setClientSecret] = useState('')

  const clickRequest = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3002/credentials/client_id=${clientID}/client_secret=${clientSecret}/org_id=${orgID}`);
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleClientID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientID(event.target.value);
  };

  const handleClientSecret = (event: React.ChangeEvent<HTMLInputElement>)=>{
	setClientSecret(event.target.value)
  }

  useEffect(() => {

    ZOHODESK.extension.onload().then(() => {
      setLoading(false);

   ZOHODESK.get('portal.id').then((data) => {
    setOrgID(data['portal.id']);
      });
    });
  }, []); 

  return (
    <>
      <h2>Cadastro de empresa</h2>
      <p role="content">OrgID: {orgID}</p>
	  <input value={clientID} onChange={handleClientID} placeholder='client ID' type="text" />
	  <input value={clientSecret} onChange={handleClientSecret} placeholder='client Secret' type="text" />
      <button onClick={clickRequest}>Cadastrar</button>
    </>
  );
};

export default App;
