import styled from 'styled-components';
import NewAddress from './NewAddress';
import ThirdOptions from './thirdOption';

export default function NewClient({show, setShow}) {

    return (

        <Container>
            <div>aqui sera o formulario para criar o cliente</div>
            <Caixa onClick={() => setShow(<NewAddress setShow={setShow}/>)}>     
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
