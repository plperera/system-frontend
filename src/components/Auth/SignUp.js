import styled from "styled-components"
import Input from "../../common/Forms/Input-Style"


export default function Login ({hasLogin, setHasLogin}){
    return(
        <Container>

            <Tittle>Cadastrar</Tittle>

            <ContainerInputs>
                <Input
                    required
                    name="email"
                    placeholder="Email"
                />
                <Input
                    required
                    name="password"
                    placeholder="Senha"
                />
                <Input
                    required
                    name="password"
                    placeholder="Confirmação da senha"
                />

                <ButtonStyle onClick={() => setHasLogin(!hasLogin)}>Cadastrar</ButtonStyle>

            </ContainerInputs>
        </Container>
    )
}

export const Container = styled.form`
    display:grid;
    grid-template-columns:1;
    row-gap: 1em;

    min-height: 470px;

    width: 100%;
    height: 100%
`
export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Tittle = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
    font-family: 'Oswald', sans-serif;

    color: white;
    letter-spacing: 0;
    font-weight: 700;

    font-size: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8em 0em 0.9em 0em;
`
export const ButtonStyle = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    height: 6vh;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;

    font-size: 1.4em;
    letter-spacing: 0.24em;
    font-weight: 700;

    background-color: #00b3ffad;

    margin-top: 40px;
`

