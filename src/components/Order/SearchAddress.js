import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../context/UserContext';
import api from '../../services/API';
import { ContainerTitle } from '../Products/NewProduct';
import NewAddress from './NewAddress';
import ThirdOptions from './thirdOption';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AddressTableLine from './AddressTableLine';

export default function SearchAddress({setShow, ClientData}) {

    //const [refresh, setRefresh] = useState(false)
    const [address, setAddress] = useState(false)
    const addressPerTable = 7
    const [limit, setLimit] = useState(addressPerTable)
    const { userData } = useContext(UserContext);
    

    async function findAllAddress(){
        try {
            const result = await api.GetAllAddressByClientId(userData.token, ClientData.id)
            console.log(result)
            setAddress(result.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        
        findAllAddress()
    // eslint-disable-next-line
    }, [])

    function LimitByArrow(type){
        if(type === "<" && limit > addressPerTable){
            setLimit(limit - addressPerTable)
        } else  if (address.length - 1 > limit && type === ">"){
            setLimit(limit + addressPerTable)
        }
    }

    return (

        <Container>
            <ContainerTitle>
                <h1 style={{fontSize:"22px", marginTop: "2vh"}}>Clique para Selecionar um Endereço para entrega</h1>
                <div onClick={() => setShow(<ThirdOptions setShow={setShow} ClientData={ClientData}/>)}>Clique aqui para voltar</div>
            </ContainerTitle>

            <ContainerTable>
                {address ? (
                    <>  
                        <AddressTableLine i={"#"}/>
                        { // eslint-disable-next-line
                        address.map((e,i) => {
                            if (i <= limit && i>= limit - addressPerTable){
                                return(
                                    <>
                                        <AddressTableLine i={i} body={e} setShow={setShow} ClientData={ClientData}/>
                                    </>
                                )
                            }
                        })}
                        <ContainerOptions>

                            <ButtonStyled onClick={ () => setShow(<NewAddress setShow={setShow} ClientData={ClientData}/>)}>
                                Criar novo Endereço
                            </ButtonStyled>

                            <ContainerArrow>
                                <div onClick={() => LimitByArrow("<")}><FaArrowLeft/></div>
                                <Count>{(limit / addressPerTable)}</Count>
                                <div onClick={() => LimitByArrow(">")}><FaArrowRight/></div>
                            </ContainerArrow>
                            
                        </ContainerOptions>
                            
                    </>
                ):(<>Carregando...</>)}
            </ContainerTable>               
        </Container>
        
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 5px;

    display: flex;
    flex-direction: column;

    color: #171717;
    h1 {
      margin-top:20px;
      font-size: 22px !important;
      font-weight:400;
    }
`;
const ButtonStyled = styled.div`
  width: 100%;
  height: 4vh;
  margin-top: 1vh;

  display:flex;
  align-items:center;
  justify-content: center;
  padding:0 10px;
  font-size: 2vh;
  
  border-radius: 10px;
  margin-right: 3vw;
  text-align:center;
  cursor: pointer;

  color: #171717;
  background-color: white;
  border: 2px solid #747474;

  :hover{
    border: 2px solid #02567c;
    color: #02567c;
    font-size: 2.2vh;
  }
`
const ContainerTable = styled.div`
    margin-top: 5vh;
`
const ContainerArrow = styled.div`

    display: flex;
    align-self: center;
    justify-content: end;
    width: 35vw;
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
        cursor: pointer;
    }
`
const Count = styled.div`
    width: 4vw !important;
    background-color: #D6D6D6 !important;
    color: #171717 !important;
    cursor: default !important;
`
const ContainerOptions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`