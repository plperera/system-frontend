import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import ProductForms from '../Products/ProductForms';
import SecondOptions from './secondOptions';
import ThirdOptions from './thirdOption';


export default function SearchClientIcon({setShow, show}) {

  return (
    <Container onClick={() => console.log("Buscar novo cliente")}>
        <div><AiOutlineSearch /></div>
        <h2>Buscar por Cliente registrado</h2>
    </Container>
  );
}

function AllClients(setShow, show){
  setShow({options: !show.options, function:<ThirdOptions/>})
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 5vw;  

    background-color: #c5c5c5;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: #171717;

    cursor: pointer;

    & > *:not(:first-child) {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 25px;  
        font-weight: 700;
    }

    & > *:not(:last-child) {
        font-size: 80px;
        margin-bottom:1vh;
    }
`;

