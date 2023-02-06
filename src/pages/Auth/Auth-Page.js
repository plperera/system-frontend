import { useState } from 'react';
import styled from 'styled-components';
import Login from '../../components/Auth/Login';
import SignUp from '../../components/Auth/SignUp';

export default function Authentication() {

    const [hasLogin, setHasLogin] = useState(true)

    return (
        <Container>

            <ContainerForms>
                
                {(hasLogin) ? (<Login/>):(<SignUp hasLogin={hasLogin} setHasLogin={setHasLogin}/>)}   

                <SwitchLoginSignUp onClick={() => setHasLogin(!hasLogin)}>
                    <p>{hasLogin ? ("Ainda não tenho um login, fazer cadastro"):("Ja tenho um login.")}</p>
                </SwitchLoginSignUp>

            </ContainerForms>
            
        </Container>
    )
}
const SwitchLoginSignUp = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');

    width: 60%;
    height: 10vh; 

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    text-decoration: underline;
    font-family: 'Oswald', sans-serif;
    font-weight:700;
    color: #00b3ff;

    padding-bottom: 3vh;

`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height:100vh;
    min-width:100%;

    background-image: linear-gradient(to bottom, #02567c, #025c85, #01638e, #016998, #0070a1, #006b9a, #006692, #00618b, #005072, #003f5a, #002f43, #00202e);
`
const ContainerForms = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;

    background-color:#242430;
    height: 64vh;
    width: 80%;
    max-width: 500px;

    border-radius: 10px;
    box-shadow: 0px 0px 97px 47px rgb(255 255 255 / 17%);
    margin-bottom: 5%;
`

