import styled from 'styled-components';
import formatar from '../../common/Functions/CPForCNPJ';
import ThirdOptions from './thirdOption';

export default function ClientTableLine({ body, i, setShow }) {
  function Select() {
    setShow(<ThirdOptions setShow={setShow} ClientData={body}/>);
  }
    
  return(
    <>
      {(i === '#')?(
        <>
          <Container background={('#0c7ead')} 
            backgroundHover={'#0c7ead'} 
            color={'white'} 
            bold={'700'}>

            <div>#</div>
            <div>Nome</div>
            <div>mainNumber</div>
            <div>CPF</div>
            <div>Email</div>
          </Container>
        </>
      ):(
        <>
          <Container 
            background={(i % 2 === 0)?('#f5f5f5'):('#f5f5f53b')} 
            backgroundHover={(i % 2 === 0)?('#30507838'):('#30507829')} 
            color={'#171717'} 
            bold={'400'}
            onClick={() => Select()}
          >
            <div>{body.id}</div>
            <div>{body.name}</div>
            <div>{body.mainNumber}</div>
            <div>{body.CPForCNPJ.length === 11 ?(formatar.CPF(body.CPForCNPJ)):(formatar.CNPJ(body.CPForCNPJ))}</div>
            <div>{body.email}</div>
          </Container>
        </>
      )}
    </>
  );
}

const Container = styled.div`
    display:grid;
    grid-template-columns: 0.75fr 3fr 2fr 2fr 4fr;
    background-color: ${props => props.background};

    width:100%;
    height:5vh;
    font-size:1.2vh;

    color:${props => props.color};
    font-weight:${props => props.bold};

    :hover{
        background-color: ${props => props.backgroundHover};
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        border: 0.5px solid #ababab;
    }
`;
