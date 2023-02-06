import styled from 'styled-components';
import { ContainerTitle } from '../Products/NewProduct';
import AddressDataCard from './AddressDataCard';
import ClientDataCard from './ClientDataCard';
import NewOrder from './NewOrder';
import OrderDataCard from './OrderDataCard ';

export default function OrderPayment({ setShow, OrderData, ClientData, AddressData, oldForm, oldItemArray }) {
  return(
    <Container>
      <InfoContainer>
        <div>
          <h1 style={{ fontSize: '22px', marginTop: '2vh' }}>Informações do Cliente</h1>
          <ClientDataCard ClientData={ClientData}/>
        </div>
        <div>
          <h1 style={{ fontSize: '22px', marginTop: '2vh' }}>Informações de Entrega</h1>
          <AddressDataCard AddressData={AddressData}/>
        </div>
        <div>
          <h1 style={{ fontSize: '22px', marginTop: '2vh' }}>Informações do Pedido</h1>
          <OrderDataCard OrderData={OrderData}/>
        </div>

      </InfoContainer>

      <ContainerTitle>
        <h1 style={{ fontSize: '22px', marginTop: '2vh' }}>Qual a forma de pagamento</h1>
        <div onClick={() => setShow(<NewOrder setShow={setShow} ClientData={ClientData} AddressData={AddressData} oldForm={oldForm} oldItemArray={oldItemArray}/>)}>Clique aqui para voltar</div>
      </ContainerTitle>
    </Container>
  );
}
const Container = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 45% 45%;
`;
const InfoContainer = styled.div`
    width:100%;    
`;