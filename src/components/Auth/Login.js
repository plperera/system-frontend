import styled from "styled-components"
import Input from "../../common/Forms/Input-Style"
import { useNavigate } from 'react-router-dom';

import { ButtonStyle, Container, ContainerInputs, Tittle } from "./SignUp"


export default function Login (){

    const navigate = useNavigate();
    
    return(
        <Container>

            <Tittle>Login</Tittle>

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

                <ButtonStyle onClick={() => navigate('/')}>Login</ButtonStyle>

            </ContainerInputs>
        </Container>
    )
}