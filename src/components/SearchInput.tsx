import React from 'react';
import { styled } from 'styled-components';

interface SearchInputProps {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const SearchInput = ({ type, placeholder, onChange, onFocus, onBlur }: SearchInputProps) => {
  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />;
};

export default SearchInput;

const StyledInput = styled.input`
  width: 480px;
  height: 70px;
  border-radius: 50px;
  font-size: 18px;
  padding-left: 55px;
`;
