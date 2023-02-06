import NewAddress from './NewAddress';
import SearchAddress from './SearchAddress';
import { ContainerOption, Option } from '../../pages/Dashboard/Order/Order';
import { ContainerTitle } from '../Products/NewProduct';
import SecondOptions from './secondOptions';

import ClientDataCard from './ClientDataCard';

export default function ThirdOptions({ setShow, ClientData }) {
  return (
    <>
      <h1 style={{ fontSize: '22px', marginTop: '2vh' }}>Informações do Cliente</h1>
      
      <ClientDataCard ClientData={ClientData}/>

      <ContainerTitle>
        <h1 style={{ fontSize: '22px', marginTop: '2vh' }}>Endereço</h1>
        <div onClick={() => setShow(<SecondOptions setShow={setShow}/>)}>Clique aqui para voltar</div>
      </ContainerTitle>

      <ContainerOption>
        <Option onClick={() => setShow(<NewAddress setShow={setShow} ClientData={ClientData}/>)}>
          <h2>Novo Endereço</h2>
        </Option>
        <Option onClick={() => setShow(<SearchAddress setShow={setShow} ClientData={ClientData}/>)}>
          <h2>Ver endereços registrados</h2>
        </Option>
      </ContainerOption>

    </>
  );
}

