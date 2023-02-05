import { useState } from 'react';
import styled from 'styled-components';
import { useCustomForm } from '../../hooks/useCustomForms';
import ThirdOptions from './thirdOption';
import ClientTableLine from './clientTableLine';

export default function SearchClient({setShow}) {

    const [form, handleForm] = useCustomForm()

    function sendForm(){
        console.log(form)
        setShow(<ThirdOptions setShow={setShow}/>)
    }

    return (

        <Container>
            <h1>Qual o Nome ou CPF do Cliente ?</h1>

            <ContainerForms>

                <Input placeholder='Qual o Nome ou CPF do Cliente ?' name='search' onChange={handleForm} value={form.search}></Input>
                <ButtonStyle>BUSCAR</ButtonStyle>
            
            </ContainerForms>    

            <ResultContainer>
                <ClientTableLine i={"#"}/>
                <ClientTableLine 
                    i={1} 
                    body={{name:"Pedro", email:"Pedro@email.com",cpf:"123.123.123-12",mainNumber:"(35) 99911-1122"}}
                    setShow={setShow}
                    />
                <ClientTableLine i={2} body={{name:"Pedro", email:"Pedro@email.com",cpf:"123.123.123-12",mainNumber:"(35) 99911-1122"}}/>
                <ClientTableLine i={3} body={{name:"Pedro", email:"Pedro@email.com",cpf:"123.123.123-12",mainNumber:"(35) 99911-1122"}}/>
                <ClientTableLine i={4} body={{name:"Pedro", email:"Pedro@email.com",cpf:"123.123.123-12",mainNumber:"(35) 99911-1122"}}/>
            </ResultContainer> 

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
  height: 14%;
  margin-top: 3vh;

  border-radius: 5px;

  display: flex;
  flex-wrap:nowrap;
  position:relative;

  color: #171717;
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
`
const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`
const ResultContainer = styled.div`
`