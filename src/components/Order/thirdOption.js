import { useState } from 'react';
import styled from 'styled-components';
import NewClient from './NewClientIcon';
import SearchClient from './searchClientIcon';


export default function ThirdOptions() {

  return (
    <>
        
        <ContainerOption>
            <NewClient/>
            <SearchClient/>
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
