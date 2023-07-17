import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchWord } from 'redux/reducers';
import { RootState } from '../redux/store';

const SearchBar = () => {
  const dispatch = useDispatch();

  const onSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentWord = e.target.value;
    dispatch(setSearchWord(currentWord));
  };

  const value = useSelector((store: RootState) => store.search);
  console.log(value);

  return (
    <div>
      <input type="text" onChange={onSearchWordChange} placeholder="질환명을 입력해주세요" />
      <button>검색</button>
    </div>
  );
};

export default SearchBar;
