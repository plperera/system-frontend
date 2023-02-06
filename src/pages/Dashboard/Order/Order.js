import { useState } from 'react';
import styled from 'styled-components';

import SecondOptions from '../../../components/Order/secondOptions';

export default function Order() {

  const [show, setShow] = useState(undefined)

  return (
    <Container>
      <>
        <h1>Pedido</h1>

        {show !== undefined ? ( show ):
        (
          <ContainerOption>

            <Option onClick={ () => setShow(<SecondOptions setShow={setShow}/>)}>Novo Pedido</Option>
            <Option onClick={ () => setShow(undefined)}>Ver todos os pedidos</Option>

          </ContainerOption>
        )}
      </>
    </Container>
  );
}
export const ContainerOption = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;

  padding: 2.5vh 0vw;

  width: 100%;
  height: 25vh;

  margin-top: 4vh;
  
    
`
export const Option = styled.div`
  width: 30vw;
  height: 10vh;

  display:flex;
  align-items:center;
  justify-content: center;
  padding:0 10px;
  font-size: 2.9vh;
  
  border-radius: 10px;
  margin-right: 3vw;
  text-align:center;
  cursor: pointer;

  color: #171717;
  background-color: white;
  border: 3px solid #747474;

  :hover{
    border: 3px solid #02567c;
    color: #02567c;
    font-size: 3.1vh;
  }
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
