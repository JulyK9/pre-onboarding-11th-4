import React from 'react';

interface TitleProps {
  firstLine: string;
  secondLine: string;
}

const Title = ({ firstLine, secondLine }: TitleProps) => {
  return (
    <>
      <h2>{firstLine}</h2>
      <h2>{secondLine}</h2>
    </>
  );
};

export default Title;
