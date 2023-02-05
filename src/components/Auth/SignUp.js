import { useState } from "react"
import styled from "styled-components"
import Input from "../../common/Forms/Input-Style"
import { useCustomForm } from "../../hooks/useCustomForms"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import api from "../../services/API";


export default function Login ({hasLogin, setHasLogin}){

    const [ form, handleForm ] = useCustomForm()

    const [showPassword, setShowPassword] = useState(false)

    async function sendForm (){
        try {
            await api.createLogin(form)
            setHasLogin(!hasLogin)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>

            <Tittle>Cadastrar</Tittle>

            <ContainerInputs>
                <Input
                    required
                    name="name"
                    type="text"
                    placeholder="Nome"
                    onChange={handleForm} 
                    value={form.name}
                />
                <Input
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleForm} 
                    value={form.email}
                />
                <Input
                    required
                    name="password"
                    type={showPassword ? ("text"):("password")}
                    placeholder="Senha"
                    onChange={handleForm} 
                    value={form.password}
                />
                <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (<AiFillEyeInvisible/>):(<AiFillEye/>)}      
                </ShowPasswordButton>
                <Input
                    required
                    name="passwordVerify"
                    type={showPassword ? ("text"):("password")}
                    placeholder="Confirmação da senha"
                    onChange={handleForm} 
                    value={form.passwordVerify}
                />
                <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (<AiFillEyeInvisible/>):(<AiFillEye/>)}      
                </ShowPasswordButton>
                
                <ButtonStyle onClick={() => sendForm()}>Cadastrar</ButtonStyle>

            </ContainerInputs>
        </Container>
    )
}
export const ShowPasswordButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    height: 3vh;
    width: 8%;
    max-width: 400px;
    border-radius: 5px;

    font-size: 1.3em;
    letter-spacing: 0.24em;
    font-weight: 700;

    background-color: #2424306b;
    margin-top: -4.5vh;
    margin-bottom: 1.5vh;
    margin-left: 65%;
    cursor: pointer;
`
export const Container = styled.form`
    display:grid;
    grid-template-columns:1;
    row-gap: 1em;

    min-height: 470px;

    width: 100%;
    height: 100%;
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
    padding: 0.8em 0em 0.1em 0em;
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

