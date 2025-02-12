import React from 'react';
import { AppContainer } from '@/components/app-container';
import { Button } from '@/components/button';
import Footer from '@/components/footer/footer';
import { Select } from '@/components/select';
import Logo from '@/components/logoLogin/logo';
import { Navbar } from '@/components/navbar/navbar';
import useFetchDepartments from '@/hooks/useFetchDepartments';
import { OrgID } from '@/interfaces/OrgID';

const RegisterDepartmentPage: React.FC<OrgID> = ({ orgID }) => {
  const { loading, departments, error, fetchDepartments } =
    useFetchDepartments(orgID);
  return (
    <AppContainer>
      <Navbar />
      <Logo />
      <h4>Registrar Departamento</h4>
      <Select>
        {departments.map((department) => (
          <option key={department.id} value={department.id}>
            {department.name}
          </option>
        ))}
      </Select>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button onClick={fetchDepartments} disabled={loading}>
        {loading ? 'Carregando...' : 'Cadastrar'}
      </Button>
      <Footer />
    </AppContainer>
  );
};

export default RegisterDepartmentPage;
