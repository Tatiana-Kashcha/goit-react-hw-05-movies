import styled from 'styled-components';

export const DivDet = styled.div`
  padding-bottom: 10px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.3);
  display: flex;
`;

export const Thumb = styled.div`
  width: 250px;
  margin-right: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  padding-top: 25px;
  margin-bottom: 25px;
`;

export const Score = styled.p`
  margin-bottom: 25px;
`;

export const Overview = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Descr = styled.p`
  margin-bottom: 25px;
`;

export const Ganres = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  li {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;
