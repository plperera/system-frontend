import styled from 'styled-components';
import { BsFillCartCheckFill } from 'react-icons/bs';
import SecondOptions from './secondOptions';

export default function EndPointOrder({setShow}) {

    return ( 
        <Container>
            <BsFillCartCheckFill/>
            <h1>Pedido realizado com sucesso !</h1>
            <ContainerButton>
                <Button onClick={() => setShow(<SecondOptions setShow={setShow}/>)}>Novo Pedido</Button> 
                <Button onClick={() => setShow(undefined)}>Voltar para o Inicio</Button> 
            </ContainerButton>

        </Container>           
    );
}

const Button = styled.div`
  width: 30vh;
  height: 6vh;
  background-color: white;
  border: 3px solid #747474;
  font-size: 2vh;
  font-weight: 700;
  color: #171717;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    border: 3px solid #02567c;
    color: #02567c;
    font-size: 2.5vh;
  }
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;

    height: 100%;
    width: 100%;

    margin-top: 15vh;

    & > *:has(:first-child){
        color: #2BAA0B;
        font-size: 15vh;
    }
    h1 {
        margin-top: 3vh;
    }
`
const ContainerButton = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.3vh;
    margin-top: 4vh;
`

