import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCustomForm } from '../../hooks/useCustomForms';
import { ContainerTitle } from '../Products/NewProduct';
import OrderInput from './OrderInput';
import ThirdOptions from './thirdOption';
import { BiAddToQueue } from 'react-icons/bi';
import OrderResume from './OrderResume';
import UserContext from '../../context/UserContext';
import api from '../../services/API';
import OrderPayment from './OrderPayment';

export default function NewOrder({ setShow, ClientData, AddressData, oldForm, oldItemArray }) {
  const [form, handleForm, setForm] = useCustomForm(oldForm);
  const [itemArray, setItemArray] = useState( oldItemArray || [1]);
  const [products, setProducts] = useState(false);
  const { userData } = useContext(UserContext);

  function sendForm() {
    // eslint-disable-next-line array-callback-return
    const itens = itemArray.map( item => {
      if(form['id' + item]!== undefined && form['itemAmount' + item] !== undefined && form['itemPrice' + item] !== undefined) {
        return {
          COD: form['COD' + item],
          productId: form['id' + item],
          itemAmount: (Number(form['itemAmount' + item]).toFixed(2) * 100),
          itemPrice: (Number(form['itemPrice' + item]).toFixed(2) * 100)
        };
      }
    }).filter(e => e !== undefined);
    itens.push(
      {
        COD: form['COD' + 999],
        productId: form['id' + 999],
        itemAmount: form['itemAmount' + 999],
        itemPrice: form['itemPrice' + 999] * 100 || 0
      },
      {
        COD: form['COD' + 888],
        productId: form['id' + 888],
        itemAmount: form['itemAmount' + 888],
        itemPrice: form['itemPrice' + 888] * 100 || 0
      }
    );
    const body = {
      itens,
      userId: userData.user.id,
      clientId: ClientData.id,
      enrollmentId: AddressData.id
    };
    if (body.itens.length > 2) {
      setShow(<OrderPayment setShow={setShow} OrderData={body} ClientData={ClientData} AddressData={AddressData} oldForm={form} oldItemArray={itemArray}/>);
    }
  }
  function newItemLine() {
    if(itemArray[itemArray.length - 1] !== 9) {
      setItemArray([...itemArray, (itemArray.length + 2)]);
    }
  }
  async function findAllProducts() {
    try {
      const result = await api.GetAllProducts(userData.token);
      setProducts(result.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
  function formatarInput(e) {
    let input = String(e) || '';
    let output = input?.replace(/[^\d,.]/g, '');
    let decimalIndex = output?.search(/[.,]/);
    if (decimalIndex !== -1) {
      let decimal = output[decimalIndex] === ',' ? '.' : output[decimalIndex];
      output = output.substring(0, decimalIndex) + decimal + output.substring(decimalIndex + 1, decimalIndex + 3)?.replace(/[.,]/g, '');
    }
    return (output) || '';
  }

  useEffect(() => {
    findAllProducts();
  // eslint-disable-next-line
  }, [])

  return (
    products ? (
      <>
        <Container>
          <ContainerTitle>
            <h1 style={{ fontSize: '22px', marginTop: '2vh' }}>Preencha os dados abaixo para fazer o pedido</h1>
            <div onClick={() => setShow(<ThirdOptions setShow={setShow} ClientData={ClientData}/>)}>Clique aqui para voltar</div>
          </ContainerTitle>

          <ContainerBody>
            <ContainerForms>

              {itemArray.map(e => 
                <OrderInput handleForm={handleForm} form={form} item={e} products={products} setForm={setForm} formatarInput={formatarInput}/>
              )}
              <AddLineButton onClick={() => newItemLine()}><BiAddToQueue/></AddLineButton>
                
            </ContainerForms>

            <ContainerResume>
              <OrderResume form={form} setForm={setForm} itemArray={itemArray} formatarInput={formatarInput} products={products}/>
            </ContainerResume>
          </ContainerBody>
              
          <ContainerButton>
            <div onClick={() => sendForm()}>Ir pada o Pagamento</div>
          </ContainerButton>
              
        </Container>
      </>
    ):(<>carregando...</>)        
  );
}
const ContainerBody = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 70% 30%;
`;
const ContainerResume = styled.div`
  width: 100%;
  height: 55vh;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 5vw;  

  border-radius: 5px;

  display: flex;
  flex-direction: column;

  color: #171717;
  h1 {
    margin-top:20px;
    font-size: 22px !important;
    font-weight:400;
    }
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
