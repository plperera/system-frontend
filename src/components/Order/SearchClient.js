import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCustomForm } from '../../hooks/useCustomForms';
import ClientTableLine from './clientTableLine';
import { ContainerTitle } from '../Products/NewProduct';
import SecondOptions from './secondOptions';
import UserContext from '../../context/UserContext';
import api from '../../services/API';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function SearchClient({ setShow }) {
  const [form, handleForm, setForm] = useCustomForm();
  //const [refresh, setRefresh] = useState(false)
  const [clients, setClients] = useState(false);
  const [search, setSearch] = useState(false);

  const clientPerTable = 7;
  const [limit, setLimit] = useState(clientPerTable);
  const { userData } = useContext(UserContext);

  async function findAllClients() {
    try {
      const result = await api.GetAllClients(userData.token);
      setClients(result.data);
      setSearch(result.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  useEffect(() => {
    findAllClients();
    // eslint-disable-next-line
    }, [])

  function LimitByArrow(type) {
    if(type === '<' && limit > clientPerTable) {
      setLimit(limit - clientPerTable);
    } else  if (clients.length - 1 > limit && type === '>') {
      setLimit(limit + clientPerTable);
    }
  }
  function sendForm() {
    // eslint-disable-next-line
        setSearch(clients.filter(e => {
      if( e.name.toLowerCase().includes(form.search.toLowerCase()) 
                || e.CPForCNPJ.toLowerCase().includes(form.search.toLowerCase()) 
                || e.mainNumber.toLowerCase().includes(form.search.toLowerCase())
                || e.email.toLowerCase().includes(form.search.toLowerCase())
      ) return true;
    }));
  }
  function enterVerify(e) {
    if(e.key === 'Enter') {
      e.preventDefault(); 
      sendForm();
    } 
  }

  return (

    <Container>
      <ContainerTitle>
        <h1 style={{ fontSize: '22px', marginTop: '2vh' }}>Qual o Nome ou CPF do Cliente ?</h1>
        <div onClick={() => setShow(<SecondOptions setShow={setShow}/>)}>Clique aqui para voltar</div>
      </ContainerTitle>

      <ContainerForms>

        <Input placeholder='Qual o Nome ou CPF do Cliente ?' name='search' onChange={handleForm} value={form.search} onKeyDown={enterVerify}></Input>
        <ButtonStyle onClick={ () => sendForm()}>BUSCAR</ButtonStyle>
            
      </ContainerForms>    

      <ContainerTable>
        {search ? (
          <>  
            <ClientTableLine i={'#'}/>
            {// eslint-disable-next-line
                        search.map((e,i) => {
                if (i <= limit && i>= limit - clientPerTable) {
                  return(
                    <>
                      <ClientTableLine i={i} body={e} setShow={setShow}/>
                    </>
                  );
                }
              })}
            <ContainerArrow>
              <div onClick={() => LimitByArrow('<')}><FaArrowLeft/></div>
              <Count>{(limit / clientPerTable)}</Count>
              <div onClick={() => LimitByArrow('>')}><FaArrowRight/></div>
            </ContainerArrow>
                            
          </>
        ):(<>Carregando...</>)}
      </ContainerTable> 

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
const ContainerForms = styled.form`
  width: 80%;
  height: 12%;
  margin-top: 3vh;

  border-radius: 5px;

  display: flex;
  flex-wrap:nowrap;
  position:relative;

  color: #171717;
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

    height: 4vh;
    width: 10vw;
    border-radius: 5px;

    right: 1vh;
    z-index:1;
    top: 1vh;
    position: absolute;

    font-size: 1.1em;
    letter-spacing: 0.24em;
    font-weight: 700;

    background-color: #0c7ead;
`;
const ContainerTable = styled.div`
    margin-top: 0vh;
`;
const ContainerArrow = styled.div`

    display: flex;
    align-self: center;
    justify-content: end;
    width: 70vw;
    margin-top: 1vh;

    div {
        width: 5vh;
        height: 3vh;
        font-size: 15px;
        background-color: #2E2E2E;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-left: 1vw;
        cursor: pointer;
    }
`;
const Count = styled.div`
    width: 4vw !important;
    background-color: #D6D6D6 !important;
    color: #171717 !important;
    cursor: default !important;
`;
