import styled from 'styled-components';

export const ButtonBack = styled.button`
  width: 80px;
  padding: 2px;
  margin-top: 5px;
  margin-bottom: 3px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid rgb(202 199 199 / 67%);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const DivDet = styled.div`
  padding-bottom: 10px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.3);
`;

export const DivAdd = styled.div`
  padding-top: 25px;
  padding-bottom: 20px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.p`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin-left: 40px;
  li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
