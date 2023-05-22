import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid;
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled(Field)`
  width: 200px;
  height: 20px;
  padding: 7px 15px;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
  &:focus {
    border: 2px solid green;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid;
  &: hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
