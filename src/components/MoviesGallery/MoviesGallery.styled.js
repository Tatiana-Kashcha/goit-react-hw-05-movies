import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  li {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
