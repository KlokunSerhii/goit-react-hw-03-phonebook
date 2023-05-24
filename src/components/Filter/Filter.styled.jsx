import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  font-size: 24px;
  font-weight: 600;
  svg {
    margin-left: 5px;
    width: 40px;
    height: 40px;
    color: #000000;
  }
  svg:hover {
    color: #07cdfa;
  }
`;
export const Input = styled.input`
  width: 500px;
  height: 25px;
  padding: 7px 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;

  &:focus {
    border: 3px solid #07cdfa;
  }
`;
