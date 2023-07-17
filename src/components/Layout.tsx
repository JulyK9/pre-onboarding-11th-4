import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cae8ff;
  padding: 100px 0;
`;
