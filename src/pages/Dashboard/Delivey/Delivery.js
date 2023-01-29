import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function Delivery() {

  const navigate = useNavigate();

  return (
    <Container>
        estou na entrega
    </Container>
  );
}

const Container = styled.div`
    width: 80vw;
    height: 20vh;
`;