import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function Stock() {

  const navigate = useNavigate();

  return (
    <Container>
        estou no estoque
    </Container>
  );
}

const Container = styled.div`
    width: 100vw;
    height: 20vh;
`;