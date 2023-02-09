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
import { useEffect } from 'react';

export default function OrderPayment({ setShow, OrderData, ClientData, AddressData, oldForm, oldItemArray }) {
  const { userData } = useContext(UserContext);
  const [paymentType, setPaymentType] = useState(false);
  const [itemArray, setItemArray] = useState([1]);
  const [form, handleForm, setForm] = useCustomForm();

  const total = (OrderData.itens.reduce((total, e) => {
    if(e.COD === 'DESC') {
      return total + ((Number(e.itemAmount) * Number(e.itemPrice) * -1) / 100);
    } if(e.COD === 'Frete') {
      return total + ((Number(e.itemAmount) * Number(e.itemPrice) * 1) / 100);
    } else {
      return total + (Number(e.itemAmount) * Number(e.itemPrice) / 10000);
    }
  }, 0));

  async function sendForm() {
    const paymentTypeArray = [];
    itemArray.map(e => {
      if (form['type'+e] !== undefined && form['value'+e] !== undefined) {
        paymentTypeArray.push(
          {
            paymentTypeId: Number(form['type'+e]), 
            value: Number(form['value'+e])*100
          });
      }
      return e;
    });

    const totalPaymentType = paymentTypeArray.reduce((total, e) => total + Number(e.value) / 100, 0);

    if (Number(Number(total).toFixed(2)) !== Number(totalPaymentType)) {
      return alert(`A soma total do valor de todas as formas de pagamento deve ser: R$${total.toFixed(2)} (atualmente a soma esta em: R$ ${totalPaymentType.toFixed(2)})`);
    }

    const itens = [];

    OrderData.itens.map(e => itens.push({ productId: e.productId, itemAmount: e.itemAmount, itemPrice: e.itemPrice }));

    const body = {
      itens: itens,
      userId: OrderData.userId,
      clientId: OrderData.clientId,
      addressId: OrderData.enrollmentId,
      paymentType: paymentTypeArray
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
  
  function newItemLine() {
    if(itemArray[itemArray.length - 1] !== 5) {
      setItemArray([...itemArray, (itemArray.length + 1)]);
    }
  }
  
  async function findAllPayments() {
    try {
      const result = await api.GetAllPaymentsType(userData.token);
      setPaymentType(result.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
    
  useEffect(() => {
    findAllPayments();
    // eslint-disable-next-line
    }, [])
    
  return(
    <Container>
      <SubContainer>

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
            {paymentType ? (
              <>
                {itemArray.map(e => 
                  <PaymentInput  
                    handleForm={handleForm} 
                    form={form} item={e} 
                    setForm={setForm}
                    paymentType={paymentType}
                  />
                )}
                <AddLineButton onClick={() => newItemLine()}><BiAddToQueue/></AddLineButton>
              </>
            ):(<>Carregando...</>)}
    
          </ContainerForms>

        </ContainerRight>

      </SubContainer>

      <ContainerButton>
        <div onClick={() => sendForm()}>Finalizar</div>
      </ContainerButton>
      
    </Container>
  );
}
const Container = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
`;
const SubContainer = styled.div`
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
  margin-top: 2vh;

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

  margin-top: 1.3vh;
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
