import { OrgID } from '@/interfaces/OrgID';
import useFetchTickets from '@/hooks/useFetchTicketsData';
import { useEffect, useState } from 'react';
import { AppContainer } from '@/components/app-container';
import { Navbar } from '@/components/navbar/navbar';
import Logo from '@/components/logoLogin/logo';
import Loader from '@/components/loader';
import Footer from '@/components/footer/footer';
import styled from 'styled-components';
import LogoZoho from '@/components/logo-zoho';
import ErrorMessage from '@/components/error-message';

const StatsContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StatItem = styled.h4`
  margin: 10px 0;
  font-size: 1em; /* Reduced font size */
  color: #666;
  display: flex;
  align-items: center;
`;

const StatLabel = styled.span`
  color: #666;
  font-weight: bold;
  margin-right: 5px;
`;

const SearchBar = styled.input`
  padding: 10px;
  margin: 20px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RefreshButton = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const TicketsPage: React.FC<OrgID> = ({ orgID }) => {
  const { fetchTickets, loading, tickets, error } = useFetchTickets(orgID);
  const [searchTerm, setSearchTerm] = useState('');

  const filterTickets = tickets.filter((ticket) => ticket.status === 'Aberto');
  const filterTodayTickets = tickets.filter(
    (ticket) => ticket.createdTime === new Date().toISOString().slice(0, 10)
  );

  const filteredTickets = tickets.filter((ticket) =>
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchTickets();
  }, []);

  const dataFiels = [
    {
      message: 'Quantidade de perguntas realizadas:',
      value: filteredTickets.length
    },
    {
      message: 'Quantidade de tickets em aberto:',
      value: filterTickets.length
    },
    {
      message: 'Quantidade de tickets criados hoje:',
      value: filterTodayTickets.length
    }
  ];

  return (
    <AppContainer>
      <Navbar />

      <LogoZoho />
      <Logo />
      <SearchBar
        type="text"
        placeholder="Buscar tickets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <Loader />}
      {error && <ErrorMessage>Erro ao carregar tickets</ErrorMessage>}
      {!loading && !error && (
        <StatsContainer>
          {dataFiels.map((field) => (
          <StatItem>
              <StatLabel>{field.message}</StatLabel>
              {field.value}
          </StatItem>
          ))}
        </StatsContainer>
      )}
      <RefreshButton onClick={fetchTickets}>Atualizar</RefreshButton>
      <Footer />
    </AppContainer>
  );
};

export default TicketsPage;
