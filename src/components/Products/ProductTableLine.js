import { useState } from "react"
import styled from "styled-components"
import dayjs from 'dayjs';

export default function ProductTableLine({body, i, setShow}) {

    function Select(){
        console.log(body)
    }

    const [display, setDisplay] = useState("none")
    
    return(
        <>
            {(i === '#')?(
                <>
                    <Container background={("#0c7ead")} 
                    backgroundHover={"#0c7ead"} 
                    color={"white"} 
                    bold={"400"}
                    >
                        <div>COD</div>
                        <div>Nome</div>
                        <div>Preço</div>

                        <ContainerSize onMouseEnter={() => { setDisplay("X")}} onMouseLeave={() => { setDisplay("none")}}>X</ContainerSize>
                        <SubContainerX opacity={display === "X" ? ("1"):("0")}>Altura</SubContainerX>

                        <ContainerSize onMouseEnter={() => { setDisplay("Y")}} onMouseLeave={() => { setDisplay("none")}}>Y</ContainerSize>
                        <SubContainerY opacity={display === "Y" ? ("1"):("0")}>Largura</SubContainerY>

                        <ContainerSize onMouseEnter={() => { setDisplay("Z")}} onMouseLeave={() => { setDisplay("none")}}>Z</ContainerSize>
                        <SubContainerZ opacity={display === "Z" ? ("1"):("0")}>Profundidade</SubContainerZ>

                        <div>Ultima Atualização</div>
                        <div>Criado em</div>
                    </Container>
                </>
                ):(
                <>
                    <Container 
                    key={i}
                    background={(i % 2 === 0)?("#f5f5f5"):("#f5f5f53b")} 
                    backgroundHover={(i % 2 === 0)?("#30507838"):("#30507829")} 
                    color={"#171717"} 
                    bold={"400"}
                    onClick={() => Select()}
                    >
                        <ContainerCOD>{body.COD}</ContainerCOD>
                        <ContainerName>{body.name}</ContainerName>
                        <ContainerPrice>R$ {(body.defaultPrice / 100).toFixed(2).replace(".", ",")}</ContainerPrice>
                        <div>{body.height}</div>
                        <div>{body.width}</div>
                        <div>{body.depth}</div>
                        <div style={{"fontSize": "18px"}}>{dayjs(body.updatedAt).locale('pt-br').format('HH:mm - DD/MM/YYYY')}</div>
                        <div style={{"fontSize": "18px"}}>{dayjs(body.createdAt).locale('pt-br').format('HH:mm - DD/MM/YYYY')}</div>
                    </Container>
                </>
            )}
        </>
    )
}
const Container = styled.div`
    display:grid;
    grid-template-columns: 6vw 15vw 8vw 5vw 5vw 5vw 13vw 13vw;
    grid-auto-columns: 100%;
    background-color: ${props => props.background};

    width: 70vw;
    height:5vh;

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
        font-size: 1.7vh;
    }
`
const ContainerCOD = styled.div`
    justify-content: start !important;
    padding-left: 16%;
`
const ContainerName = styled.div`
    justify-content: start !important;
    padding-left: 8%;
`
const ContainerPrice = styled.div`
    justify-content: start !important;
    padding-left: 25%;
`
const ContainerSize = styled.div`
    text-decoration: underline; 
`
const SubContainerX= styled.div`
    opacity: ${props => props.opacity};
    position: absolute;
    width: 8vh;
    height: 3vh;
    border-radius: 5px;
    background-color: #EEEEEEBE;
    box-shadow: 0px 0px 8px -4px rgba(0,0,0,0.73);
    color: #171717;
    font-size: 1.8vh !important;
    border: none !important;
    left: 52.4vw;
    top: 18.2vh;
`

const SubContainerY= styled.div`
    opacity: ${props => props.opacity};
    position: absolute;
    width: 8.5vh;
    height: 3vh;
    border-radius: 5px;
    background-color: #EEEEEEBE;
    box-shadow: 0px 0px 8px -4px rgba(0,0,0,0.73);
    color: #171717;
    font-size: 1.8vh !important;
    border: none !important;
    left: 57.25vw;
    top: 18.2vh;
`

const SubContainerZ= styled.div`
    opacity: ${props => props.opacity};
    position: absolute;
    width: 14vh;
    height: 3vh;
    border-radius: 5px;
    background-color: #EEEEEEBE;
    box-shadow: 0px 0px 8px -4px rgba(0,0,0,0.73);
    color: #171717;
    border: none !important;
    font-size: 1.8vh !important;
    left: 60.8vw;
    top: 18.2vh;
`