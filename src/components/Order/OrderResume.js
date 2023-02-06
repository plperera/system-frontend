import styled from "styled-components"

export default function OrderResume({form, itemArray, handleForm}){

    return(
        <Container>
            <h1>Resumo</h1>
            <ItensContainer>

                <Item>
                    <div style={{justifyContent:"center"}}>COD</div>
                    <div style={{justifyContent:"center"}}>Quantidade</div>
                    <div style={{justifyContent:"center"}}>Subtotal</div>
                </Item>

                {itemArray.map(e =>
                    <Item>
                        <div>{form[`COD${e}`]}</div>
                        <div style={{justifyContent:"center"}}>{form[`itemAmount${e}`]}</div>
                        <div style={{paddingLeft:"1.3vw"}}>{(form[`itemPrice${e}`]*form[`itemAmount${e}`] || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </div>
                    </Item>
                )}

            </ItensContainer>

            <SubContainer>

                <div>Frete</div>
                <Input placeholder='Frete' name="frete" onChange={handleForm} value={form.frete}></Input>

                <div>{"Desconto (-)"}</div>
                <Input placeholder='Desconto' name="desconto" onChange={handleForm} value={form.desconto}></Input>

                <div>Total</div>
                <div style={{paddingLeft:"1.3vw"}}>
                    {
                        (itemArray.reduce((total, e) => (form[`itemPrice${e}`]*form[`itemAmount${e}`] || 0) + total, 0)
                        +Number(form.frete || 0)
                        -Number(form.desconto || 0))
                            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    }
                </div>
            </SubContainer>
            
        </Container>
    )
}
const ItensContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1vh;
    margin: 3vh 0;
`
const Item = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 3fr;
    div {
        width:100%;
        display: flex;
        align-items: center;
        justify-content: start;
    }
`
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
`
const Container = styled.div`
    background-color: #E2E2E2;
    padding: 1px 0vw 1vh 1.3vw;
    margin-top: 7vh;
    border-radius: 5px;
`
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
`
const InputContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5vh;
`