import { styled } from 'styled-components';
import Nav from './components/Nav';
import Banner from './components/Banner';
import './App.css';
import Category from './components/Category';

const App = () => {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('images/home-background.png') center center no-repeat fixed;
    background-size: cover;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default App;
