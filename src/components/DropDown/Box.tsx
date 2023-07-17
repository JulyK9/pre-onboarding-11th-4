import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface BoxProps {
  children: ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return <BoxContainer>{children}</BoxContainer>;
};

export default Box;

const BoxContainer = styled.div`
  width: 480px;
  max-height: 400px;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  z-index: 50;
  overflow: auto;
`;
