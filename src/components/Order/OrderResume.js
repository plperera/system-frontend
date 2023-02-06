import { useEffect } from 'react';
import styled from 'styled-components';

export default function OrderResume({ form, setForm, itemArray, products, formatarInput }) {
  function handleFormToFreteAndDesconto({ target: { value, name } }) {
    if(name === 'Frete') {
      setForm({
        ...form, 
        ['itemPrice' + 999]: value,
      });
    } else if (name === 'DESC') {
      setForm({ 
        ...form,
        ['itemPrice' + 888]: value
      });
    }
  }

  useEffect(() => {
    setForm({
      ...form, 
      ['COD' + 999]: 'Frete',
      ['COD' + 888]: 'DESC',
      ['id' + 999]: (products?.filter(e => e.COD === 'Frete'))[0].id,
      ['id' + 888]: (products?.filter(e => e.COD === 'DESC'))[0].id,
      ['itemAmount' + 999]: 1,
      ['itemAmount' + 888]: 1
    });
  }, []);

  return(
    <Container>
      <h1>Resumo</h1>
      <ItensContainer>

        <Item>
          <div style={{ justifyContent: 'center' }}>COD</div>
          <div style={{ justifyContent: 'center' }}>Quantidade</div>
          <div style={{ justifyContent: 'center' }}>Subtotal</div>
        </Item>

        {itemArray.map(e =>
          <Item>
            <div>{form[`COD${e}`]}</div>
            <div style={{ justifyContent: 'center' }}>{formatarInput(form[`itemAmount${e}`])}</div>
            <div style={{ paddingLeft: '1.3vw' }}>{(formatarInput(form[`itemPrice${e}`])*formatarInput(form[`itemAmount${e}`]) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </div>
          </Item>
        )}

      </ItensContainer>

      <SubContainer>

        <div>Frete</div>
        <Input placeholder='Frete' name="Frete" onChange={handleFormToFreteAndDesconto} value={formatarInput(form['itemPrice' + 999])}></Input>

        <div>{'Desconto (-)'}</div>
        <Input placeholder='Desconto' name="DESC" onChange={handleFormToFreteAndDesconto} value={formatarInput(form['itemPrice' + 888])}></Input>

        <div>Total</div>
        <div style={{ paddingLeft: '1.3vw' }}>
          {
            (itemArray.reduce((total, e) => (formatarInput(form[`itemPrice${e}`])*formatarInput(form[`itemAmount${e}`]) || 0) + total, 0)
                +Number(formatarInput(form['itemPrice' + 999]) || 0)
                -Number(formatarInput(form['itemPrice' + 888]) || 0))
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          }
        </div>
      </SubContainer>
            
    </Container>
  );
}
const ItensContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1vh;
    margin: 3vh 0;
`;
const Item = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 3fr;
    div {
        width:100%;
        display: flex;
        align-items: center;
        justify-content: start;
    }
`;
const SubContainer= styled.div`
    display: grid;
    grid-template-columns:4fr 3fr;
    font-weight: 700;
    font-size: 17px;
    div {
        width:100%;
        height: 3vh;
        display: flex;
        align-items: center;
        justify-content: start;
    }
`;
const Container = styled.div`
    background-color: #E2E2E2;
    padding: 1px 0vw 1vh 1.3vw;
    margin-top: 7vh;
    border-radius: 5px;
`;
const Input = styled.input`
    
  height: 3vh;
  width: 80%;
  text-decoration: none;
  opacity: 1;
  border: none;
  border-bottom: 0.2vh #ababab solid;

  font-size: 14px;
  color: #171717;

  padding-left: 1.6em;
  padding-right: 0;
  outline: none;
  background: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 1vh;
  ::placeholder{
    color: #9b9b9b;
    opacity: 1;
  }
  :focus {
    border-bottom: 0.2vh #0070a1 solid;
  }
`;
