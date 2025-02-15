import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border: 4px solid transparent;
  border-top: 4px solid #3498db;
  border-right: 4px solid #f39c12;
  border-bottom: 4px solid #e74c3c;
  border-left: 4px solid #2ecc71;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default Loader;
