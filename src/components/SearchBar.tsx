import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchWord } from 'redux/reducers';
import { RootState } from '../redux/store';
import { styled } from 'styled-components';
import { BiSearch } from 'react-icons/bi';

import SearchInput from './SearchInput';
import Button from './Button';
import { toggleDropDown } from 'redux/toggleReducers';

const SearchBar = () => {
  const dispatch = useDispatch();

  const onSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentWord = e.target.value;
    dispatch(setSearchWord(currentWord));
  };

  const { currentWord } = useSelector((store: RootState) => store.search);
  console.log(currentWord);

  const onToggleChange = () => {
    dispatch(toggleDropDown());
  };

  return (
    <BarWrapper>
      <SearchInput
        type="text"
        placeholder="질환명을 입력해주세요"
        onChange={onSearchWordChange}
        onFocus={onToggleChange}
        onBlur={onToggleChange}
      />
      <InputIconWrapper>
        <BiSearch size={20} color="gray" />
      </InputIconWrapper>
      <Button type="button">
        <BiSearch size={25} color="white" />
      </Button>
    </BarWrapper>
  );
};

export default SearchBar;

const BarWrapper = styled.div`
  position: relative;
  margin-bottom: 5px;
`;

const InputIconWrapper = styled.div`
  position: absolute;
  top: 26px;
  left: 25px;
`;
