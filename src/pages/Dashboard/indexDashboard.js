import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import NavigationBar from '../../components/Dashboard/Dashboard';

export default function Dashboard() {

  return (
        <Container>
            
            <NavigationBar/>
            
            <PageContainer>
              <Outlet />
            </PageContainer>

        </Container>
  );
}

const Container = styled.div`

  height: 100%;
  min-height: 100vh;
  width: 100vw;

  background-image: linear-gradient(to bottom, #02567c, #025c85, #01638e, #016998, #0070a1, #006b9a, #006692, #00618b, #005072, #003f5a, #002f43, #00202e);

  display:grid;
  grid-template-columns: 15vw 85vw;

`;

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`
