import styled from 'styled-components';

export default function PaymentInput({ handleForm, form, item, paymentType, setForm }) {
  function verifySelect(e) {
    if (e.target.value !== '-1') {
      handleForm(e);
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
  function verifyInput(e) {
    e.target.value = formatarInput(e.target.value);
    handleForm(e);
  }
  
  return(
    <Container>
      <StyledSelect 
        name={'type'+item} 
        onChange={verifySelect} 
        value={form['type'+item]}
        border={form['type'+item] === undefined ? ('3px solid #ababab'):('5px solid #139904')}
      >

        <StyledOption value={'-1'}>--Selecione uma Forma de Pagamento--</StyledOption>

        {paymentType.map(e => 
          <>
            <StyledOption value={e.id}>{e.type}</StyledOption>
          </>
        )}
      </StyledSelect>
      <Input placeholder='Valor' name={'value'+item} onChange={verifyInput}></Input>
    </Container>
  );
}
const StyledSelect = styled.select`
  height: 4.5vh;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: none;
  border-left: ${props => props.border};
  border-radius: 5px;
  outline: none;

  &:focus {
    border-left: 3px solid #0070A1;
  }
`;

const StyledOption = styled.option`
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  padding: 10px;
  background-color: #fff;
`;
const Container = styled.div`
  height: 4.5vh;
  width: 100%;
  display: grid;
  grid-template-columns: 62.5% 32.5%;
  column-gap: 5%;
  margin-bottom: 1.5vh;
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

  ::placeholder{
    color: #9b9b9b;
    opacity: 1;
  }
  :focus {
    border-bottom: 0.4vh #0070a1 solid;
  }
`;
