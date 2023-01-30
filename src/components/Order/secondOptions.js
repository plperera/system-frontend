import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';

import NewClient from './NewClient';
import SearchClient from './SearchClient';
import { ContainerOption, Option } from '../../pages/Dashboard/Order/Order';

export default function SecondOptions({setShow}) {

    return (
        <>     
            <ContainerOption>
                <Option onClick={() => setShow(<NewClient setShow={setShow}/>)}>
                    <h2>Novo Cliente</h2>
                </Option>
                <Option onClick={() => setShow(<SearchClient setShow={setShow}/>)}>
                    <h2>Buscar por Cliente registrado</h2>
                </Option>
            </ContainerOption>
        </>
    );
}
