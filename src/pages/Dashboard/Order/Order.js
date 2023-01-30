import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import SecondOptions from '../../../components/Order/secondOptions';
import EndPointOrder from "../../../components/Order/EndPointOrder";
import NewAddress from "../../../components/Order/NewAddress";
import NewClient from "../../../components/Order/NewClientIcon";
import NewOrder from "../../../components/Order/NewOrder";
import SearchAddress from "../../../components/Order/SearchAddress";
import SearchClient from "../../../components/Order/SearchClient";
import ThirdOptions from "../../../components/Order/thirdOption";
import NewProduct from "../../../components/Products/NewProduct";

export default function Order() {

  const [show, setShow] = useState(undefined)

  const newOrderHash = {
    secondOptions: <SecondOptions/>,
    newClient: <NewClient/>,
    searchClient: <SearchClient/>,
    thirdOptions: <ThirdOptions/>,
    hasAdress: <SearchAddress/>,
    newAdress: <NewAddress/>,
    newOrdder: <NewOrder/>,
    newProduct: <NewProduct/>,
    end: <EndPointOrder/>,
  }

  function teste(teste){
    if (teste === 1){
      setShow(newOrderHash["newClient"])
    } else {
      setShow(newOrderHash["end"])
    }
  }

  return (
    <Container>

      <Caixa onClick={ () => teste(1)}>1</Caixa>
      <Caixa onClick={ () => teste(2)}>2</Caixa>

      <div>
        {show !== undefined ? (show):(<>oi</>)}
      </div>

    </Container>
  );
}
const Caixa = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 10px;
  margin-top: 10px;
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
