import { OrgID } from '@/interfaces/OrgID';
import useFetchTickets from '@/hooks/useFetchTicketsData';
import { useEffect } from 'react';
import { AppContainer } from '@/components/app-container';
import { Navbar } from '@/components/navbar/navbar';
import Logo from '@/components/logoLogin/logo';
import Loader from '@/components/loader';
import Footer from '@/components/footer/footer';

const TicketsPage: React.FC<OrgID> = ({ orgID }) => {
  const { fetchTickets, loading, tickets } = useFetchTickets(orgID);

  const filterTickets = tickets.filter((ticket) => ticket.status === 'Aberto');

  const filterTodayTickets = tickets.filter(
    (ticket) => ticket.createdTime === new Date().toISOString().slice(0, 10)
  );

  useEffect(() => {
    fetchTickets();
  }, [orgID]);

  return (
    <AppContainer>
      <Navbar />
      <Logo />
      {loading && <Loader />}
      {!loading && (
        <>
          <h4>Quantidade de perguntas realizadas: {tickets.length}</h4>
          <h4>Quantidade de tickets em aberto : {filterTickets.length}</h4>
          <h4>
            Quantidade de tickets criados hoje :{' '}
            {filterTodayTickets.length === 0
              ? 'Nenhum ticket criado hoje'
              : filterTodayTickets.length}
          </h4>
        </>
      )}
      <Footer />
    </AppContainer>
  );
};

export default TicketsPage;
