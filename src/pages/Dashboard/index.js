import { useContext } from 'react';
import styled from 'styled-components';

import NavigationBar from '../../components/Dashboard/Dashboard';

//import DashboardLayout from '../../layouts/Dashboard';

export default function Dashboard() {
  return (
        <Container>

            <NavigationBar/>
            <PageContainer></PageContainer>

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
`
