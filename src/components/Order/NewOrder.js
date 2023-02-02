import { useState } from 'react';
import styled from 'styled-components';
import { useCustomForm } from '../../hooks/useCustomForms';
import EndPointOrder from './EndPointOrder';
import OrderInput from './OrderInput';



export default function NewOrder({setShow}) {

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
      if(itemArray[itemArray.length - 1] === 8){
        console.log("7 ta bom ne ?")
      } else {
        setItemArray([...itemArray, (itemArray.length + 2)])
      }
    }

    return (

        <Container>
            <h1>Preencha os dados abaixo para fazer o pedido</h1>

            <ContainerForms>

              {itemArray.map(e => <OrderInput handleForm={handleForm} form={form} item={e}/>)}
            
            </ContainerForms>
            
            <ContainerButton>
                <ButtonStyle onClick={() => newItemLine()}>mais linha ae</ButtonStyle>
                <ButtonStyle onClick={() => sendForm()}>Cadastrar</ButtonStyle>
            </ContainerButton>
            
        </Container>
        
    );
}

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
  width: 80%;
  height: 100%;
  margin-right: 5vw;  
  margin-top: 5vh;

  border-radius: 5px;

  display: flex !important;
  flex-direction: column;

  color: #171717;
`

const ButtonStyle = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  height: 6vh;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;

  font-size: 1.4em;
  letter-spacing: 0.24em;
  font-weight: 700;

  background-color: #0c7ead;

  margin-top: 40px;
`
const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`