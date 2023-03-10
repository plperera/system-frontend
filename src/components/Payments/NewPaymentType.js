import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import styled from 'styled-components';
import { useCustomForm } from '../../hooks/useCustomForms';
import api from '../../services/API';

export default function NewPaymentType({ setShow }) {
  const [form, handleForm, setForm] = useCustomForm();
  const { userData } = useContext(UserContext);

  async function sendForm() {
    try {
      await api.CreateProduct(form, userData.token);
      setForm({});
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
 
  return (
    <Container>
        
      <ContainerTitle>
        <h1>Nova forma de Pagamento</h1>
        <div onClick={() => setShow(undefined)}>Clique aqui para voltar</div>
      </ContainerTitle>

      <ContainerForms>

        <Input placeholder='Qual sera a Forma de Pagamento?' name='paymentType' onChange={handleForm} value={form.paymentType}></Input>
       
      </ContainerForms>

      <ButtonStyle onClick={() => sendForm()}>Cadastrar</ButtonStyle>

    </Container>
  );
}
export const ContainerTitle = styled.div`
  display: flex;
  align-items: flex-end;
  div {
    height: 2vh;
    width: 16vh;
    margin-left: 1vw;
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2vh;
    color: #919191;
    background-color: #E7E7E7;
    border-radius: 5px;

    cursor: pointer;
  }
`;
export const Container = styled.div`
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
  height: 15%;
  margin-right: 5vw;  
  margin-top: 5vh;

  border-radius: 5px;

  display: flex;
  flex-direction: column;

  color: #171717;

  div {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    column-gap: 2vw;
  }
`;
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
`;
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
`;
