import styled from 'styled-components';

export default function OrderDataCard({ OrderData }) {
  return(
    <OrderDataContainer>
      <OrderList>
        
        { OrderData.itens.map(e => 
          <div>
            <OrderTitle>{e.COD}</OrderTitle>
            <OrderItem>{`${Number(e.itemAmount)} x ${Number(e.itemPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</OrderItem>  
          </div>
        )}
        
      </OrderList>

      <SecondOrderList>
        <OrderTitle>Total</OrderTitle>
        <OrderItem>
          {
            OrderData.itens.reduce((total, e) => {
              if(e.COD === 'DESC') {
                return total + Number(e.itemAmount) * Number(e.itemPrice) * -1;
              } else {
                return total + Number(e.itemAmount) * Number(e.itemPrice);
              }
            }, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          }
        </OrderItem>  
      </SecondOrderList>

    </OrderDataContainer>
  );
}
const SecondOrderList = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: #ECECEC;
  height: 3.2vh;
  width: 100%;
  margin-top: 2vh;
  padding: 1vh;
  border-radius: 5px;
  :hover{
    background-color: #D1D1D1;
  }

  div {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;
const OrderList = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;

  div {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;
const OrderDataContainer = styled.div`
  padding: 2vh 2vh 2vh 2vh;
  border-radius: 5px;
  background-color: #F3F3F3;
  margin-top: 2vh;
  width:100%;
`;
const OrderItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 14px;
  font-weight: 700;

  width:100%;
`;
const OrderTitle = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

