import styled from 'styled-components';
import { ContainerTitle } from '../Products/NewProduct';
import AddressDataCard from './AddressDataCard';
import ClientDataCard from './ClientDataCard';
import NewOrder from './NewOrder';
import OrderDataCard from './OrderDataCard ';
import { BiAddToQueue } from 'react-icons/bi';
import { useCustomForm } from '../../hooks/useCustomForms';
import { useState } from 'react';
import PaymentInput from './PaymentInput';
import api from '../../services/API';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import EndPointOrder from './EndPointOrder';

export default function OrderPayment({ setShow, OrderData, ClientData, AddressData, oldForm, oldItemArray }) {
  const { userData } = useContext(UserContext);

  async function sendForm() {
    const itens = [];

    OrderData.itens.map(e => itens.push({ productId: e.productId, itemAmount: e.itemAmount * 100, itemPrice: e.itemPrice * 100 }));

    const body = {
      itens: itens,
      userId: OrderData.userId,
      clientId: OrderData.clientId,
      addressId: OrderData.enrollmentId
    };
    if (body.itens.length > 2) {
      try {
        await api.CreateOrder(body, userData.token);
        setShow(<EndPointOrder setShow={setShow}/>);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  }
  /*
  function newItemLine() {
    if(itemArray[itemArray.length - 1] !== 5) {
      setItemArray([...itemArray, (itemArray.length + 2)]);
    }
  }
  
    async function findAllPayments() {
        try {
        const result = await api;
        setProducts(result.data);
        } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        }
    }
    
    useEffect(() => {
        findAllPayments();
    // eslint-disable-next-line
    }, [])
    */
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
    
      <ContainerRight>
        <ContainerTitle>
          <h1 style={{ fontSize: '22px', marginTop: '2vh' }}>Qual a forma de pagamento</h1>
          <div onClick={() => setShow(<NewOrder setShow={setShow} ClientData={ClientData} AddressData={AddressData} oldForm={oldForm} oldItemArray={oldItemArray}/>)}>Clique aqui para voltar</div>
        </ContainerTitle>

        <ContainerForms>

          {/* {itemArray.map(e => 
            <PaymentInput  handleForm={handleForm} form={form} item={e} setForm={setForm}/>
          )}
          <AddLineButton onClick={() => newItemLine()}><BiAddToQueue/></AddLineButton> */}
          EM BREVE ...
  
        </ContainerForms>

      </ContainerRight>

      <ContainerButton>
        <div onClick={() => sendForm()}>Ir pada o Pagamento</div>
      </ContainerButton>
    </Container>
  );
}
const Input = styled.input`
    
    height: 4.5vh;
    width: 100%;
    text-decoration: none;
    opacity: 1;

    border: none;
    border-bottom: 0.4vh #ababab solid;

    font-size: 14px;
    color: #171717;

    padding-left: 1.6em;
    padding-right: 0;
    outline: none;
    background: #f5f5f5;
    border-radius: 5px;

    margin-top: 2vh;
    ::placeholder{
        color: #9b9b9b;
        opacity: 1;
    }
    :focus {
        border-bottom: 0.4vh #0070a1 solid;
    }
`;
const Container = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 45% 45%;
    column-gap: 5%;
`;
const ContainerRight = styled.div`
    width:100%;
`;
const InfoContainer = styled.div`
    width:100%;    
`;
const ContainerForms = styled.div`
  width: 90%;
  height: 55vh;
  margin-top: 5vh;

  border-radius: 5px;

  display: flex !important;
  flex-direction: column;
  align-items: center;

  color: #171717;
`;
const AddLineButton = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  color: #171717;
  font-size: 1.6em;

  height: 3vh;
  width: 80%;
  border-radius: 5px;

  letter-spacing: 0.24em;
  font-weight: 700;

  background-color: #E6E6E6;

  margin-top: 3vh;
  cursor: pointer;
`;
const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  div {
    width: 65%;
    height: 8vh;

    display:flex;
    align-items:center;
    justify-content: center;
    padding:0 10px;
    font-size: 3vh;
    font-weight: 700;
    letter-spacing: 0.2vw;
    
    border-radius: 10px;
    margin-right: 3vw;
    text-align:center;
    cursor: pointer;

    color: #171717;
    background-color: white;
    border: 4px solid #747474;

    :hover{
      border: 4px solid #02567c;
      color: #02567c;
      font-size: 3.3vh;
    }
  }
`;
