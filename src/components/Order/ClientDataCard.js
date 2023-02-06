import styled from 'styled-components';
import formatar from '../../common/Functions/CPForCNPJ';
import dayjs from 'dayjs';

export default function ClientDataCard({ ClientData }) {
  return(
    <ClientDataContainer>
      <div>

        <p>Nome: </p>
        <p style={{ fontSize: '17px', fontWeight: 700 }}>
          {ClientData.name}
        </p>      

        <p>CPF/CNPJ: </p>
        <p style={{ fontSize: '17px', fontWeight: 700 }}>
          {ClientData.CPForCNPJ.length === 11 ?(formatar.CPF(ClientData.CPForCNPJ)):(formatar.CNPJ(ClientData.CPForCNPJ))}
        </p>

        <p>Email: </p>
        <p style={{ fontSize: '17px', fontWeight: 700 }}>
          {ClientData.email}
        </p>

      </div>
      <div>
        <p>Telefone para Contato: </p>
        <p style={{ fontSize: '17px', fontWeight: 700 }}>
          {ClientData.mainNumber}
        </p>

        <p>Cadastrado em: </p>
        <p style={{ fontSize: '17px', fontWeight: 700 }}>
          {dayjs(ClientData.createdAt).locale('pt-br').format('DD/MM/YYYY - HH:mm')}
        </p>

        <p>Ultima Atualização: </p>
        <p style={{ fontSize: '17px', fontWeight: 700 }}>
          {dayjs(ClientData.updatedAt).locale('pt-br').format('DD/MM/YYYY - HH:mm')}
        </p>

      </div> 
    </ClientDataContainer>
  );
}
const ClientDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  padding: 2vh 2vh 2vh 2vh;
  border-radius: 5px;
  background-color: #F3F3F3;
  column-gap: 5vw;
  margin-top: 2vh;
  font-size: 15px;
  width:100%;
  div{
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    column-gap:1vw;
    row-gap:0.8vh;
    width:100%;
  }
  p{
    color: #303030;
  }

`;
