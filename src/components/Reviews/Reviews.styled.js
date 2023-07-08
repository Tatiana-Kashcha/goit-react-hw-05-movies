import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 40px;
  margin-top: 20px;
  li {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Author = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
`;
