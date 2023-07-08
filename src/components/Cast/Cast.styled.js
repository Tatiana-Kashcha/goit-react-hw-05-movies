import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 20px;
  margin-top: 20px;
  li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
