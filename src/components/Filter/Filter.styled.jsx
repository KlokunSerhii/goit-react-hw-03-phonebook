import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  font-size: 24px;
  font-weight: 600;
  svg {
    position: absolute;
    margin-left: 15px;
    width: 25px;
    height: 25px;
    color: rgb(0, 0, 0, 0.5);
  }
`;
export const Input = styled.input`
  width: 500px;
  height: 25px;
  padding: 10px 45px;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;

  &:focus {
    border: 3px solid #07cdfa;
  }
`;
