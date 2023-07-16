import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';
import Title from 'components/Title';

const HEADING_FIRST = '국내 모든 임상시험 검색하고';
const HEADING_SECOND = '온라인으로 참여하기';

const Home = () => {
  return (
    <Layout>
      <Title firstLine={HEADING_FIRST} secondLine={HEADING_SECOND} />
      <SearchBar />
    </Layout>
  );
};

export default Home;
