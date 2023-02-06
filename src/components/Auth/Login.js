import Input from "../../common/Forms/Input-Style"
import { useNavigate } from 'react-router-dom';

import { ButtonStyle, Container, ContainerInputs, Tittle, ShowPasswordButton } from "./SignUp"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { useCustomForm } from "../../hooks/useCustomForms";
import api from "../../services/API";
import UserContext from "../../context/UserContext";

export default function Login (){

    const navigate = useNavigate();

    const [ form, handleForm ] = useCustomForm()
    const [showPassword, setShowPassword] = useState(false)
    const { setUserData } = useContext(UserContext)

    async function sendForm (){
        try {
            console.log(form)
            const result = await api.CreateSession(form)
            setUserData(result.data)
            navigate('/dashboard')

        } catch (error) {
            console.log(error)
        }
    }

    
    return(
        <Container>

            <Tittle>Login</Tittle>

            <ContainerInputs>
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

                <ButtonStyle onClick={() => sendForm()}>Login</ButtonStyle>

            </ContainerInputs>
        </Container>
    )
}