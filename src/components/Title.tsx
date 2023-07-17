import { styled } from 'styled-components';

interface TitleProps {
  firstLine: string;
  secondLine: string;
}

const Title = ({ firstLine, secondLine }: TitleProps) => {
  return (
    <TitleContainer>
      <h2>{firstLine}</h2>
      <h2>{secondLine}</h2>
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  margin-bottom: 40px;
`;
