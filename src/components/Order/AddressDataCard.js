import styled from 'styled-components';

export default function AddressDataCard({ AddressData }) {
  return(
    <AddressDataContainer>
      <div>
        <AddressTitle>CEP: </AddressTitle>
        <AddressItem>
          {`${AddressData.CEP}, ${AddressData.cidade}, ${AddressData.bairro}, ${AddressData.rua}, ${AddressData.numero}`}
        </AddressItem>
      </div>
      <div>
        <AddressTitle>Contato: </AddressTitle>
        <AddressItem>
          {AddressData.telefone}
        </AddressItem>
      </div> 
    </AddressDataContainer>
  );
}
const AddressDataContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding: 2vh 2vh 2vh 2vh;
  border-radius: 5px;
  background-color: #F3F3F3;
  row-gap: 2vh;
  margin-top: 2vh;
  font-size: 15px;
  width:100%;
  div{
    display: grid;
    grid-template-columns: 15% 85%;
    column-gap:1vw;
    row-gap:0.8vh;
    width:100%;
  }
  p{
    color: #303030;
  }
`;
const AddressItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 14px;
  font-weight: 700;

  width:100%;
`;
const AddressTitle = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
