import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--andes-color-blue-500, #3483fa); 
  color: var(--andes-color-blue-100, #e1ecf4); 
  font-family: Proxima Nova, -apple-system, Roboto, Arial, sans-serif;
  font-size: 12px; 
  font-weight: 600;
  height: 30px; 
  line-height: 30px; 
  border-radius: 6px; 
  padding: 0 12px; 
  text-align: center;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.2s ease, transform 0.2s ease;

  margin: 4px 0;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2968c8;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12); 
    transform: translateY(-2px); 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 131, 250, 0.4); 
  }

  &:active {
    background-color: #1d4f9c;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); 
    transform: translateY(1px); 
  }

  &:disabled {
    background-color: #d3d3d3; 
    color: #9e9e9e; /* Texto desativado */
    cursor: not-allowed;
    box-shadow: none; 
  }
`;
