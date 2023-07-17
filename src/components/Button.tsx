import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  // text: string;
  children: ReactNode;
  type?: 'submit' | 'button' | 'reset';
}

const Button = ({ children, type, ...props }: ButtonProps) => {
  return (
    <>
      <SearchButton type={type}>{children}</SearchButton>
    </>
  );
};

export default Button;

const SearchButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 8px;
  background-color: #037ae8;
  position: absolute;
  right: 13px;
  top: 13px;
`;
