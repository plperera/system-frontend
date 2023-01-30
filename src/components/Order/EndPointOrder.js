import { useState } from 'react';
import styled from 'styled-components';

export default function EndPointOrder({setShow}) {

    return (
        <div>     
            Tudo certo, vc chegou ate o fim
            <Button onClick={() => setShow(undefined)}>Finalizar</Button>            
        </div>
    );
}

const Button = styled.div`
  width: 150px;
  height: 90px;
  background-color: lightblue;
`

