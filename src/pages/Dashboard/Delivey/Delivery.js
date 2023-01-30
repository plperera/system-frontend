import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function Delivery() {

  const navigate = useNavigate();

  return (
    <Container>Entregas - Em breve...</Container>
  );
}

const Container = styled.div`
  background-color: white;
  width: 75vw;
  height: 90vh;
  border-radius:5px;
  
  display: flex;
  align-items:center;
  justify-content: center;

  font-size:40px;
`;
