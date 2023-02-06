import styled from 'styled-components';

export default function OrderInput({ handleForm, form, item, products, setForm, formatarInput }) {
  function searchProductName(COD) {
    const result = products.filter(e => e.COD === COD);
    return result[0]?.name || '';
  }
  function addId({ target: { value, name } }) {
    const result = products.filter(element => element?.COD === value);
    setForm({ 
      ...form, 
      ['id'+item]: result[0]?.id, ['COD'+item]: value,
      ['itemPrice' + item]: result[0]?.defaultPrice / 100 
    });
  }

  return(
    <Container>
      <Input placeholder='COD' name={'COD'+item} onChange={addId} value={form['COD' + item]?.toUpperCase()}></Input>
      <Input placeholder='Descrição' name={'name'+item} value={searchProductName(form['COD' + item])}></Input>
      <Input placeholder='Quantidade' name={'itemAmount'+item} onChange={handleForm} value={formatarInput(form['itemAmount' + item])}></Input>
      <Input placeholder='Preço' name={'itemPrice'+item} onChange={handleForm} value={formatarInput(form['itemPrice' + item])}></Input>
    </Container>
  );
}
const Container = styled.div`
    height: 1vh;
    display: grid;
    grid-template-columns: 0.9fr 2.6fr 1fr 1fr;
    column-gap: 1vw;
    margin-bottom: 5vh;
`;
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
