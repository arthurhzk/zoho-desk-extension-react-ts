import styled from "styled-components";

export const Button = styled.button`
  background-color: #0033a0;
  width:70%;
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s, transform 0.2s ease-in-out;

  &:hover {
    background-color: #002070;
    transform: translateY(-3px);
  }

  &:disabled {
    background-color: #a5a5a5;
    cursor: not-allowed;
  }
`;
