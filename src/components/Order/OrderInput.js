import styled from "styled-components"

export default function OrderInput ({handleForm, form, item}){
    
    return(
        <Container>
            <Input placeholder='COD' name={'COD'+item} onChange={handleForm} value={form["COD" + item]}></Input>
            <Input placeholder='Descrição' name={'name'+item} onChange={handleForm} value={form["name" + item]}></Input>
            <Input placeholder='Quantidade' name={'itemAmount'+item} onChange={handleForm} value={form["itemAmount" + item]}></Input>
            <Input placeholder='Preço' name={'itemPrice'+item} onChange={handleForm} value={form["itemPrice" + item]}></Input>
        </Container>
    )
}
const Container = styled.div`
    height: 1vh;
    display: grid;
    grid-template-columns: 0.7fr 3fr 1fr 1fr;
    column-gap: 1vw;
    margin-bottom: 7vh;
`
const Input = styled.input`
    
    height: 6vh;
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
`