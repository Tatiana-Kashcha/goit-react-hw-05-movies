import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonBack = styled(Link)`
  width: 80px;
  padding: 2px;
  margin-top: 5px;
  margin-bottom: 3px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid rgb(202 199 199 / 67%);
  background-color: #ffffff;
  color: #2a2a2a;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  &:active {
    background-color: rgb(99 149 241);
  }
`;
