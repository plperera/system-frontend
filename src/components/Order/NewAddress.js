import styled from 'styled-components';
import NewOrder from './NewOrder';
import ThirdOptions from './thirdOption';

export default function NewAddress({show, setShow}) {

    return (

        <Container>
            <div>aqui sera o formulario para criar o endereço para o cliente</div>
            <Caixa onClick={() => setShow(<NewOrder setShow={setShow}/>)}>     
                Concluido
            </Caixa>
        </Container>
        
    );
}
const Caixa = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 10px;
  margin-top: 10px;
`
const Container = styled.div`
    width:100%;
    height:100%;
`
