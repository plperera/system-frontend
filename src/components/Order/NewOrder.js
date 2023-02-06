import { useState } from 'react';
import styled from 'styled-components';
import { useCustomForm } from '../../hooks/useCustomForms';
import { ContainerTitle } from '../Products/NewProduct';
import EndPointOrder from './EndPointOrder';
import OrderInput from './OrderInput';
import ThirdOptions from './thirdOption';
import { BiAddToQueue } from 'react-icons/bi';
import OrderResume from './OrderResume';


export default function NewOrder({setShow, ClientData, AddressData}) {

  const [form, handleForm] = useCustomForm()
  const [itemArray, setItemArray] = useState([1])

    function sendForm(){
      const formatedForm = itemArray.map(item => {
        return {
          COD: form["COD" + item],
          name: form["name" + item],
          itemAmount: form["itemAmount" + item],
          itemPrice: form["itemPrice" + item]
        }
      })
      console.log(formatedForm)
      setShow(<EndPointOrder setShow={setShow}/>)
    }
    function newItemLine(){
      if(itemArray[itemArray.length - 1] === 9){
        console.log("8 ta bom ne ?")
      } else {
        setItemArray([...itemArray, (itemArray.length + 2)])
      }
    }

    return (

        <Container>
            <ContainerTitle>
                <h1 style={{fontSize:"22px", marginTop: "2vh"}}>Preencha os dados abaixo para fazer o pedido</h1>
                <div onClick={() => setShow(<ThirdOptions setShow={setShow} ClientData={ClientData}/>)}>Clique aqui para voltar</div>
            </ContainerTitle>

            <ContainerBody>
              <ContainerForms>

                {itemArray.map(e => <OrderInput handleForm={handleForm} form={form} item={e}/>)}
                <AddLineButton onClick={() => newItemLine()}><BiAddToQueue/></AddLineButton>
              
              </ContainerForms>

              <ContainerResume>
                <OrderResume form={form} itemArray={itemArray} handleForm={handleForm}/>
              </ContainerResume>
            </ContainerBody>
            
            
            <ContainerButton>
                <div onClick={() => sendForm()}>Cadastrar</div>
            </ContainerButton>
            
        </Container>
        
    );
}
const ContainerBody = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 70% 30%;
`
const ContainerResume = styled.div`
  width: 100%;
  height: 55vh;
`
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
`

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
`
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
    font-size: 4vh;
    font-weight: 700;
    letter-spacing: 0.4vw;
    
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
      font-size: 4.3vh;
    }
  }

`