import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import api from '../../services/API'
import { Container, ContainerTitle } from './NewProduct';
import ProductTableLine from './ProductTableLine';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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

export default function AllProducts({setShow}) {

    const [refresh, setRefresh] = useState(false)
    const [products, setProducts] = useState(false)
    const [limit, setLimit] = useState(9)
    const { userData } = useContext(UserContext);

    async function findAllProducts(){
        try {
            const result = await api.GetAllProducts(userData.token)
            setProducts(result.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        
        findAllProducts()

    }, [refresh])

    function LimitByArrow(type){
        if(type === "<" && limit > 9){
            setLimit(limit - 9)
        } else  if (products.length - 1 > limit && type === ">"){
            setLimit(limit + 9)
        }
    }

    return (
        <Container>
            <ContainerTitle>
                <h1 onClick={() => setRefresh(!refresh)}>Tabela de Produtos</h1>
                <div onClick={() => setShow(undefined)}>Clique aqui para voltar</div>
            </ContainerTitle>

            <ContainerTable>
                
                {products ? (
                    <>  
                        <ProductTableLine i={"#"}/>
                        {products.map((e,i) => {
                            if (i <= limit && i>= limit - 9){
                                return(
                                    <>
                                        <ProductTableLine i={i} body={e}/>
                                    </>
                                )
                            }
                        })}
                        <ContainerArrow>
                            <div onClick={() => LimitByArrow("<")}><FaArrowLeft/></div>
                            <Count>{limit / 9}</Count>
                            <div onClick={() => LimitByArrow(">")}><FaArrowRight/></div>
                        </ContainerArrow>
                        
                    </>
                ):(<>Carregando...</>)}
               
            </ContainerTable> 
        </Container>

    );
}

const ContainerTable = styled.div`
    margin-top: 5vh;
`
const ContainerArrow = styled.div`

    display: flex;
    align-self: center;
    justify-content: end;
    width: 70vw;
    margin-top: 1vh;

    div {
        width: 5vh;
        height: 3vh;
        font-size: 15px;
        background-color: #2E2E2E;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-left: 1vw;
    }
`
const Count = styled.div`
    width: 4vw !important;
    background-color: #D6D6D6 !important;
    color: #171717 !important;
`
