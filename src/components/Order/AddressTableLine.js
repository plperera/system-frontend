import styled from "styled-components"
import formatar from "../../common/Functions/CPForCNPJ"
import NewOrder from "./NewOrder"
import ThirdOptions from "./thirdOption"

export default function AddressTableLine({body, i, setShow, ClientData}) {

    function Select(){
        setShow(<NewOrder setShow={setShow} ClientData={ClientData} AddressData={body}/>)
    }
    
    return(
        <>
            {(i === '#')?(
                <>
                    <Container background={("#0c7ead")} 
                    backgroundHover={"#0c7ead"} 
                    color={"white"} 
                    bold={"700"}>

                        <div>#</div>
                        <div>CEP</div>
                        <div>Cidade</div>
                        <div>Rua</div>
                        <div>Bairro</div>
                        <div>Numero</div>
                        <div>Telefone</div>

                    </Container>
                </>
                ):(
                <>
                    <Container 
                    background={(i % 2 === 0)?("#f5f5f5"):("#f5f5f53b")} 
                    backgroundHover={(i % 2 === 0)?("#30507838"):("#30507829")} 
                    color={"#171717"} 
                    bold={"400"}
                    onClick={() => Select()}
                    >
                        <div>{i + 1}</div>
                        <div>{body.CEP}</div>
                        <div>{body.cidade}</div>
                        <div>{body.rua}</div>
                        <div>{body.bairro}</div>
                        <div>{body.numero}</div>
                        <div>{body.telefone}</div>
                    </Container>
                </>
            )}
        </>
    )
}

const Container = styled.div`
    display:grid;
    grid-template-columns: 3vw 7vw 10vw 20vw 12vw 7vw 10vw;
    background-color: ${props => props.background};

    width:100%;
    height:4vh;
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
`
