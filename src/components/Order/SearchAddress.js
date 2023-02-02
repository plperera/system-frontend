import styled from 'styled-components';
import { useCustomForm } from '../../hooks/useCustomForms';
import { AddressCase } from './AddressCase';
import NewAddress from './NewAddress';
import NewOrder from './NewOrder';

export default function SearchClient({setShow}) {

    const [form, handleForm] = useCustomForm()

    function sendForm(){
        console.log(form)
    }

    return (

        <Container>

            <h1>Selecione o Endereço para entrega</h1>

            <ResultContainer>
                <AddressCase/>
                <AddressCase/>
                <AddressCase/>
                <AddressCase/>
            </ResultContainer> 

            <ButtonsStyled>
                <div onClick={ () => setShow(<NewAddress setShow={setShow} />)}>Criar novo Endereço</div>
                <EndButton onClick={ () => setShow(<NewOrder setShow={setShow} />)}>Prosseguir</EndButton>
            </ButtonsStyled>
            
        
        </Container>
        
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 5px;

    display: flex;
    flex-direction: column;

    color: #171717;
    h1 {
      margin-top:20px;
      font-size: 22px !important;
      font-weight:400;
    }
`;
const ResultContainer = styled.div`

    display:grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    height:45%;

    margin-top:22px;
`
const ButtonsStyled = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    height:45%;
    div {
        display:flex;
        align-items: center;
        justify-content: center;

        font-size: 20px;

        width:90%;
        height:10vh;

        background-color: #D1D1D1;
        border-radius: 5px;
    }
`
const EndButton = styled.div`
    background-color: #0c7ead !important;
    color: white;
    font-size: 28px !important;
    font-weight: 700;
    letter-spacing: 0.3vw;
`
