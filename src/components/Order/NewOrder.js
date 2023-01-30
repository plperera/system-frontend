import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosAddCircleOutline } from 'react-icons/io';
import ProductForms from '../Products/ProductForms';
import SecondOptions from './secondOptions';



export default function NewOrder() {

  const navigate = useNavigate();

  return (
    <Container>
        <h2>Preencha os dados para criar o pedido</h2>
    </Container>
  );
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 5vw;  

    background-color: #c5c5c5;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: #171717;

    cursor: pointer;

    & > *:not(:first-child) {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 25px;  
        font-weight: 700;
    }

    & > *:not(:last-child) {
        font-size: 80px;
        margin-bottom:1vh;
    }
`;

