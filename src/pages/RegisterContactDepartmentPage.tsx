import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppContainer } from '../components/app-container';
import { Button } from '../components/button';
import Footer from '../components/footer/footer';
import { Select } from '../components/select';
import Logo from '../components/logoLogin/logo';
import { Navbar } from '../components/navbar/navbar';
import { Contact } from '../interfaces/Contact';
import { Department } from '../interfaces/Department';

const RegisterContactDepartmentPage = () => {
  const [loading, setLoading] = useState(false);
  const [orgID, setOrgID] = useState('666343010');
  const [departments, setDepartments] = useState<Department[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [, setDepartment] = useState('');

  const signCompanyData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4001/api/department/${orgID}`
      );
      setDepartments(response.data.data.departments.data);
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDepartmentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDepartment(event.target.value);
  };

  useEffect(() => {
    signCompanyData();
    ZOHODESK.extension.onload().then(() => {
      setLoading(false);

      ZOHODESK.get('portal.id').then((data) => {
        setOrgID(data['portal.id']);
      });
    });
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <Logo />
      <h4>Registrar Departamento</h4>
      <Select onChange={handleDepartmentChange}>
        {departments.map((department) => (
          <option key={department.id} value={department.id}>
            {department.name}
          </option>
        ))}
      </Select>
      <Button onClick={signCompanyData} disabled={loading}>
        {loading ? 'Carregando...' : 'Cadastrar'}
      </Button>
      <Footer />
    </AppContainer>
  );
};

export default RegisterContactDepartmentPage;
