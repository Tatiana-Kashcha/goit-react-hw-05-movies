import styled from 'styled-components';

export const DivDet = styled.div`
  padding-bottom: 10px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.3);
  display: flex;
`;

export const Thumb = styled.div`
  min-width: 250px;
  margin-right: 20px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 20px;
  li {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
