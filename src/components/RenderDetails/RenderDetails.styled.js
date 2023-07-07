import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 40px;
  li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const Div = styled.div`
  padding-top: 25px;
  padding-bottom: 20px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.p`
  margin-bottom: 20px;
`;
