import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function Order() {

  const navigate = useNavigate();

  return (
    <Container>
        estou no pedido
    </Container>
  );
}

const Container = styled.div`
    width: 80vw;
    height: 20vh;
`;