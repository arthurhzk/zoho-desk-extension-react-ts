import styled from "styled-components";

export const Input = styled.input`
  margin: 10px 0;
  padding: 12px;
  border: 2px solid #0033a0;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 0 5px rgba(255, 111, 0, 0.8);
    outline: none;
  }
`;
