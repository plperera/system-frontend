import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsCashCoin, BsArchive } from 'react-icons/bs';

export default function NavigationBar() {

  const navigate = useNavigate();
  const location = useLocation();

  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  return (
    <Container>
        <UserInfo></UserInfo>

        <ItemContainer active={isActive('/dashboard/pedido')} onClick={() => navigate('/dashboard/pedido')}>
            <span>Pedido</span>
            <div><AiOutlineShoppingCart /></div>
        </ItemContainer>

        <ItemContainer active={isActive('/dashboard/estoque')} onClick={() => navigate('/dashboard/estoque')}>
            <span>Estoque</span>
            <div><BsArchive /></div>
        </ItemContainer>

        <ItemContainer active={isActive('/dashboard/pagamento')} onClick={() => navigate('/dashboard/pagamento')}>
            <span>Pagamento</span>
            <div><BsCashCoin /></div>
        </ItemContainer>

        <ItemContainer active={isActive('/dashboard/entrega')} onClick={() => navigate('/dashboard/entrega')}>
            <span>Entrega</span>
            <div><TbTruckDelivery /></div>
        </ItemContainer>
      
    </Container>
  );
}

const Container = styled.div`

    display: grid;
    row-gap: 4vh;
    justify-content: center;
    align-content: flex-start;

    background-color: #e3e3e3;
    box-shadow: 2px 0 10px 0 rgba(0,0,0,0.1);

    width: 15vw;

`;
const ItemContainer = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
    font-family: 'Oswald', sans-serif;

    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;

    height: 8vh;
    width: 12vw;

    color: ${props => props.active?('white'):('#171717')};
    
    background-color: ${props => props.active?('#124c64'):('#c5c5c5')};;
    border-radius:5px;

    font-weight: ${props => props.active?('700'):('400')};

    cursor: pointer;

    & > *:not(:first-child) {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 25px;   
    }

    & > *:not(:last-child) {
        font-size: 20px;
        padding-left: 1vw;
    }
    
`
const UserInfo = styled.div`
   margin-top: 10vh;
`
