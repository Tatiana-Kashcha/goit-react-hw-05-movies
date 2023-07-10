import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 40px;
  padding-top: 20px;
  li {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Thumb = styled.div`
  width: 100px;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  margin-bottom: 20px;
`;

export const NoCast = styled.p`
  padding-top: 20px;
`;
