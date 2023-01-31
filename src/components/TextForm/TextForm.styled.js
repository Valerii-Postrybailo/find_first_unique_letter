import styled from 'styled-components';

export const Form = styled.form`
  display:flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  display: block;
  width:85%;
  height:250px;
  margin:0 auto;
  padding: 10px;

  resize: none;
  outline:none;

  background-color:#ffc0cb;
  border-width:2px;
  border-radius: 2%;
  border-color:grey;

  font-size:13pt;
`

export const SubmitBtn = styled.button`
  width: 30%;
  margin-top:20px;
  margin-bottom:20px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;

  background-color: #f5deb3;
  border: none;
  border-radius: 7px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: violet;
  }
`