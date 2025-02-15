import React, { useEffect } from 'react';
import { AppContainer } from '@/components/app-container';
import { Button } from '@/components/button';
import Footer from '@/components/footer/footer';
import { Select } from '@/components/select';
import Logo from '@/components/logoLogin/logo';
import { Navbar } from '@/components/navbar/navbar';
import useFetchDepartments from '@/hooks/useFetchDepartments';
import { OrgID } from '@/interfaces/OrgID';
import styled from 'styled-components';
import Loader from '@/components/loader';
import { Title } from '@/components/title';
import LogoZoho from '@/components/logo-zoho';

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

const StyledSelect = styled(Select)`
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

const RegisterDepartmentPage: React.FC<OrgID> = ({ orgID }) => {
  const { loading, departments, error, fetchDepartments } =
    useFetchDepartments(orgID);

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <LogoZoho />
      <Logo />
      <FormContainer>
        <Title>Registrar Departamento</Title>
        {loading && <Loader />}
        {!loading && (
          <>
            <StyledSelect>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </StyledSelect>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button disabled={loading}>
              {loading ? 'Carregando...' : 'Cadastrar'}
            </Button>
          </>
        )}
      </FormContainer>
      <Footer />
    </AppContainer>
  );
};

export default RegisterDepartmentPage;
