import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;  /* Aumentando o padding para dar mais espaçamento */
  background-color: rgb(255, 230, 0);
  color: black;
  border-bottom: 2px solid #f1f1f1;  /* Leve ajuste na borda para dar mais contraste */
  width: 100%;
  height: 2.5rem;  /* Aumentando um pouco a altura da navbar */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  /* Sombra mais suave para modernizar */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  justify-content: flex-start;
  transition: all 0.3s ease; /* Transição suave caso algum efeito seja aplicado */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0.5rem;
    height: auto;
  }
`;

const NavbarLogo = styled.img`
  height: 1.5rem;  /* Aumentando ligeiramente o tamanho do logo */
  width: auto;
  margin-right: 220px;  /* Ajustando o espaço entre o logo e outros itens */
  @media (max-width: 768px) {
    height: 1.3rem;  /* Ajuste no logo para telas menores */
  }
`;

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarLogo src="./img/logoMercadoLivre.svg" alt="Logo Mercado Livre" />
      {/* Adicione outros itens aqui, se necessário */}
    </NavbarContainer>
  );
};
