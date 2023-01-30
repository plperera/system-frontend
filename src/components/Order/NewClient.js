import styled from 'styled-components';
import { useCustomForm } from '../../hooks/useCustomForms';
import NewAddress from './NewAddress';

export default function NewClient({setShow}) {

    const [form, handleForm] = useCustomForm()

    function sendForm(){
        console.log(form)
        setShow(<NewAddress setShow={setShow}/>)
    }

    return (

        <Container>
            <h1>Preencha os dados abaixo para Cadastrar o Cliente</h1>

            <ContainerForms>

            <div>
                <Input placeholder='Nome' name='name' onChange={handleForm} value={form.name}></Input>
                <Input placeholder='CPF' name='cpf' onChange={handleForm} value={form.cpf}></Input>
                <Input placeholder='Numero' name='mainNumber' onChange={handleForm} value={form.mainNumber}></Input>
            </div>

            <div>
                <Input placeholder='Email' name='email' onChange={handleForm} value={form.email}></Input>
            </div>
            
            </ContainerForms>
            
            <ContainerButton>
                <ButtonStyle onClick={() => sendForm()}>Cadastrar</ButtonStyle>
            </ContainerButton>
            
        </Container>
        
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 5vw;  

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
const ContainerForms = styled.form`
  width: 80%;
  height: 25%;
  margin-right: 5vw;  
  margin-top: 5vh;

  border-radius: 5px;

  display: flex;
  flex-direction: column;

  color: #171717;

  & > *:not(:last-child) {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    column-gap: 2vw;
  }

  & > *:not(:first-child) {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2vw;
  }
`
const Input = styled.input`
    
    height: 6vh;
    width: 100%;
    text-decoration: none;
    opacity: 1;

    border: none;
    border-bottom: 0.4vh #ababab solid;

    font-size: 14px;
    color: #171717;

    padding-left: 1.6em;
    padding-right: 0;
    outline: none;
    background: #f5f5f5;
    border-radius: 5px;

    margin-top: 2vh;
    ::placeholder{
        color: #9b9b9b;
        opacity: 1;
    }
    :focus {
        border-bottom: 0.4vh #0070a1 solid;
    }
`
const ButtonStyle = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  height: 6vh;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;

  font-size: 1.4em;
  letter-spacing: 0.24em;
  font-weight: 700;

  background-color: #0c7ead;

  margin-top: 40px;
`
const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`

