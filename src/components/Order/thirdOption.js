import { useState } from 'react';
import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import NewAddress from './NewAddress';
import SearchAddress from './SearchAddress';
import { ContainerOption, Option } from '../../pages/Dashboard/Order/Order';


export default function ThirdOptions({setShow}) {

  return (
    <>
        <ContainerOption>
            <Option onClick={() => setShow(<NewAddress setShow={setShow}/>)}>
                <h2>Novo Endereço</h2>
            </Option>
            <Option onClick={() => setShow(<SearchAddress setShow={setShow}/>)}>
                <h2>Ver endereços registrados</h2>
            </Option>
        </ContainerOption>

    </>
  );
}
