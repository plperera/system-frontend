import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';
import { Container } from './NewProduct';
import AllProducts from './AllProducts';


export default function FindAllProducts({setShow, show}) {

  const navigate = useNavigate();

  return (
    <Container onClick={() => setShow({options: !show.options, function:<AllProducts/>})}>
        <div><GrSearch /></div>
        <h2>Ver tabela de Produtos</h2>
    </Container>
  );
}

