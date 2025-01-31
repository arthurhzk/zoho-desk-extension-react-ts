import styled from "styled-components";

export const Input = styled.input`
  margin: 4px 0; 
  padding: 8px 12px; 
  border: 2px solid #3483fa; 
  border-radius: 8px;
  font-size: 12px; 
  color: #333;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  height: 30px; 
  line-height: 30px;
  
  box-sizing: border-box;

  &:focus {
    border-color: #2968c8; 
    box-shadow: 0 0 5px rgba(52, 131, 250, 0.8); 
    outline: none;
  }
`;
