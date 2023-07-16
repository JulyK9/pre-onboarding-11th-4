import React, { useState } from 'react';

const SearchBar = () => {
  const [currentWord, setCurrentWord] = useState<string>('');

  const onSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentWord(e.target.value);
  };

  return (
    <div>
      <input type="text" value={currentWord} onChange={onSearchWordChange} placeholder="질환명을 입력해주세요" />
      <button>검색</button>
    </div>
  );
};

export default SearchBar;
