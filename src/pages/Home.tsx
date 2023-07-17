import { styled } from 'styled-components';
import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';
import Title from 'components/Title';
import DropDown from 'components/DropDown/DropDown';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const HEADING_FIRST = '국내 모든 임상시험 검색하고';
const HEADING_SECOND = '온라인으로 참여하기';

const Home = () => {
  const { isOpen } = useSelector((store: RootState) => store.dropDown);

  return (
    <Layout>
      <MainContainer>
        <Title firstLine={HEADING_FIRST} secondLine={HEADING_SECOND} />
        <SearchBar />
        {isOpen && <DropDown />}
      </MainContainer>
    </Layout>
  );
};

export default Home;

const MainContainer = styled.main`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
