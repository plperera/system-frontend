import NewClient from './NewClient';
import SearchClient from './SearchClient';
import { ContainerOption, Option } from '../../pages/Dashboard/Order/Order';
import { ContainerTitle } from '../Products/NewProduct';

export default function SecondOptions({setShow}) {

    return (    
        <>  
            <ContainerTitle>
                <h1 style={{fontSize:"22px", marginTop: "2vh"}}>Cliente</h1>
                <div onClick={() => setShow(undefined)}>Clique aqui para voltar</div>
            </ContainerTitle>

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
