import styled from 'styled-components';
import NewOrder from './NewOrder';
import { useCustomForm } from '../../hooks/useCustomForms';
import { ContainerTitle } from '../Products/NewProduct';
import ThirdOptions from './thirdOption';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import api from '../../services/API';

export default function NewAddress({setShow, ClientData}) {
    const [form, handleForm] = useCustomForm()
    const { userData } = useContext(UserContext);


    async function sendForm(){
        console.log(form)
        const body = {
            ...form,
            clientId: ClientData.id
        }
        const result = await api.CreateAddress(body, userData.token)
        setShow(<NewOrder setShow={setShow} ClientData={ClientData} AddressData={result}/>)
    }

    return (

        <Container>
            <ContainerTitle>
                <h1 style={{fontSize:"22px", marginTop: "2vh"}}>Preencha os dados abaixo para Definir o Endereço de Entrega para o Cliente</h1>
                <div onClick={() => setShow(<ThirdOptions setShow={setShow} ClientData={ClientData}/>)}>Clique aqui para voltar</div>
            </ContainerTitle>

            <ContainerForms>

            <div>
                <Input placeholder='CEP' name='CEP' onChange={handleForm} value={form.CEP}></Input>
                <Input placeholder='Cidade' name='cidade' onChange={handleForm} value={form.cidade}></Input>
                <Input placeholder='Rua' name='rua' onChange={handleForm} value={form.rua}></Input>
            </div>

            <div>
                <Input placeholder='Bairro' name='bairro' onChange={handleForm} value={form.bairro}></Input>
                <Input placeholder='Numero' name='numero' onChange={handleForm} value={form.numero}></Input>
                <Input placeholder='Telefone para Contato' name='telefone' onChange={handleForm} value={form.telefone}></Input>
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
    grid-template-columns: 1fr 1fr 3fr;
    column-gap: 2vw;
  }

  & > *:not(:first-child) {
    display: grid;
    grid-template-columns: 2fr 1fr 3fr;
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
