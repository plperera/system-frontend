import { useState } from 'react';
import styled from 'styled-components';

export function AddressCase() {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <Container onClick={() => setIsSelect(!isSelect)}>

      <ContainerSelector background={isSelect ? ('#25a8cf'):('white')}>
        <div></div>
      </ContainerSelector>

      <ContainerData>
        <div>37200-000</div>
        <div>Lavras</div>
        <div>Rua 1</div>
        <div>Centro</div>
        <div>10</div>
        <div>(35) 99911-2211</div>
      </ContainerData>

    </Container>
  );
}
const Container = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    justify-content: center;
    align-items: center;

    width:90%;
    height:15vh;

    background-color: #D1D1D1;
    border-radius: 5px;
`;
const ContainerSelector = styled.div`
    width: 4vh;
    height: 4vh;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50px;

    background-color: white;
    margin-left:20px;
    div {
        width:80%;
        height: 80%;

        border-radius: 50px;

        background-color: ${props => props.background};;
    }
`;

const ContainerData = styled.div`
    color: black;
`;
