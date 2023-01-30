import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';
import ReactTable from 'react-table';

const data = [
    {
        COD:"BV10",
        name: "Bloco de Vedação",
        defaultPrice:"R$ 2,60",
        height:"9cm",
        width:"19cm",
        depth:"39cm",
        createdAt:"30/01/2023",
        updatedAt:"30/01/2023"
    }
]

export default function AllProducts() {

    
    /*
    const columns = [
        {
            Headers:"COD",
            accessor:"COD"
        },
        {
            Headers:"Descrição",
            accessor:"name"
        },
        {
            Headers:"Preço",
            accessor:"defaultPrice"
        },
        {
            Headers:"Altura",
            accessor:"height"
        },
        {
            Headers:"Largura",
            accessor:"width"
        },
        {
            Headers:"Profundidade",
            accessor:"depth"
        },
        {
            Headers:"Data de Criação",
            accessor:"createdAt"
        },
        {
            Headers:"Ultima atualização",
            accessor:"updatedAt"
        },
    ]
    */
  return (
    <Container>
        {/* <ReactTable data={data} columns={columns}/> */}
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 5vw;  

    border: 1px solid red;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: #171717;
`

