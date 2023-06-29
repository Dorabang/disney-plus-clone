import { Container, Wrap } from './CategoryStyled';
import CategoryList from './Constant';

const Category = () => {
  return (
    <Container>
      {CategoryList.map((category) => (
        <Wrap key={category.id}>
          <img src={category.image} alt={category.alt} />
          <video autoPlay loop muted>
            <source src={category.video} type='video/mp4' />
          </video>
        </Wrap>
      ))}
    </Container>
  );
};

export default Category;
