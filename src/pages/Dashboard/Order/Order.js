import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import SecondOptions from '../../../components/Order/secondOptions';
import EndPointOrder from "../../../components/Order/EndPointOrder";
import NewAddress from "../../../components/Order/NewAddress";
import NewOrder from "../../../components/Order/NewOrder";
import SearchAddress from "../../../components/Order/SearchAddress";
import SearchClient from "../../../components/Order/SearchClient";
import ThirdOptions from "../../../components/Order/thirdOption";
import NewProduct from "../../../components/Products/NewProduct";
import NewClient from '../../../components/Order/NewClient';

export default function Order() {

  const [show, setShow] = useState(undefined)

  return (
    <Container>
      <>
        {show !== undefined ? (show):(
        <ContainerOption>
          <Caixa onClick={ () => setShow(<SecondOptions setShow={setShow}/>)}>Novo Pedido</Caixa>
          <Caixa onClick={ () => setShow(undefined)}>Ver todos os pedidos</Caixa>
        </ContainerOption>
        )}
      </>
    </Container>
  );
}
const Caixa = styled.div`
  width: 100px;
  height: 100px;

  display:flex;
  align-items:center;
  justify-content: center;
  padding:0 10px;
  
  background-color: lightgray;
  border-radius: 10px;
  margin-top: 10px;
  margin-right:20px;
  text-align:center;
`
const Container = styled.div`
    background-color: white;
    width: 75vw;
    height: 90vh;
    border-radius:5px;

    padding: 2.5vh 3vw;
    
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;

    h1 {
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 0.1vw;
    }
`;
const ContainerOption = styled.div`
    display: flex;
    justify-content: start;
    align-items: flex-start;

    padding: 2.5vh 0vw;

    width: 100%;
    height: 25vh;

    margin-top: 4vh;
`
const ContainerBack = styled.div`
    display: flex;
    justify-content: start;
    align-items: flex-start;

    padding: 2.5vh 0vw;

    width: 100%;
    height: 12vh;

    margin-top: 4vh;
`
export const IconDiv = styled.div`
    width: 200px;
    height: 100%;

    background-color: #c5c5c5;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #171717;

    cursor: pointer;

    & > *:not(:first-child) {
        font-size: 24px;
    }

    & > *:not(:last-child) {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 25px;  
        font-weight: 700;
        
    }
`
