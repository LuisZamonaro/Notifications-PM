import styled from 'styled-components';

export const ContainerCard = styled.div`
  padding-inline-start: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: ${({isRead}) => isRead ? 'hsl(210, 60%, 98%)' : 'white'};
  border-radius: 10px;
  margin-left: 0.75rem;

  @media (max-width: 375px) {
    width: 347px;
  }

  .redPoint {
    position: absolute;
    right: -20px;
    top: 22px;
    width: 5px;
    height: 5px;
    background-color: ${({isRead}) => isRead ? 'hsl(1, 90%, 64%)' : 'white'};
    border-radius: 50%;
  }
`;

export const InfoTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;