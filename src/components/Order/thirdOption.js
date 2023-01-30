import { useState } from 'react';
import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import NewAddress from './NewAddress';
import SearchAddress from './SearchAddress';


export default function ThirdOptions({setShow}) {

  return (
    <>
        
        <ContainerOption>
            <Option onClick={() => setShow(<NewAddress setShow={setShow}/>)}>
                <div><IoIosAddCircleOutline /></div>
                <h2>Novo Endereço</h2>
            </Option>
            <Option onClick={() => setShow(<SearchAddress setShow={setShow}/>)}>
                <div><AiOutlineSearch /></div>
                <h2>Ver endereços registrados</h2>
            </Option>
        </ContainerOption>

    </>
  );
}

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
`
const Option = styled.div`
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
