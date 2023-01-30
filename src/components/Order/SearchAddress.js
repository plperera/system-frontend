import { useState } from 'react';
import styled from 'styled-components';
import NewClient from './NewClientIcon';
import NewOrder from './NewOrder';
import ThirdOptions from './thirdOption';

export default function SearchClient({setShow}) {

    return (
        <>
            <div>     
                Aqui sera realizada a busca por todos os endereços do usuario
            </div>
            <Caixa onClick={() => setShow(<NewOrder setShow={setShow}/>)}>
                concluido
            </Caixa>
        </>
    );
}

const Caixa = styled.div`
  width: 100px;
  height: 100px;

  display:flex;
  align-items:center;
  justify-content: center;
  padding:0 10px;
  
  background-color: lightgray;
  border-radius: 10px;
  margin-top: 10px;
  margin-right:20px;
  text-align:center;
`