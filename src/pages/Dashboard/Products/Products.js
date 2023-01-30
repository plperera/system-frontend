import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styled from 'styled-components';
import FindAllProducts from '../../../components/Products/FindAllProducts';
import NewProduct from '../../../components/Products/NewProduct';


export default function Products() {

  const navigate = useNavigate();
  const [show, setShow] = useState({options: true, function: <></>})

  return (
    <Container>

        <h1>Tabela de Produtos</h1>
        {show.options ?(
        
            <ContainerOption>
                <NewProduct show={show} setShow={setShow}/>
                <FindAllProducts show={show} setShow={setShow}/>
            </ContainerOption>
        
        ):(
            <>
            <ContainerBack>
                <IconDiv onClick={ () => {setShow({...show, options: !show.options})}}>
                    <AiOutlineArrowLeft/>
                    <span>Voltar</span>
                </IconDiv>
            </ContainerBack>
            
            {show.function}
            </>
        )}
        
        
        
    </Container>
  );
}

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
`;