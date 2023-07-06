import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  button {
    padding: 1px 4px;
    border: 1px solid rgb(195 192 192);
    cursor: pointer;
    &:active {
      background-color: rgb(195 192 192);
    }
  }
`;

export const Input = styled.input`
  width: 400px;
  padding: 4px;
  border: 1px solid rgb(219, 216, 216);
  &:focus {
    border-color: rgb(99, 149, 241, 0.6);
    outline: 2px rgba(99, 149, 241, 0.6);
    outline-style: solid;
  }
`;
