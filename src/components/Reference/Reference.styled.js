import styled from 'styled-components';

export const ReferenceBlock =styled.div`
  margin: 0 auto;
  display: block;

  width: 35%;
  margin-top: 9.5%;
`;

export const ReferenceItem = styled.div`
  margin-bottom: 10px;

  border-radius: 5px;
  color:#513C2F;
  background-color: #f5deb3;
`;

export const ReferenceItemLabel = styled.label`
  display: block;
  padding: 10px 15px;

  font-weight:bold;

  cursor: pointer;
  transition: background .2s ease-out;

  &:hover,
  &:focus {
    border-radius: 5px;
    background-color: #ffc0cb;
  }
`;

export const ReferenceItemMainTextBlock = styled.div`
  display:none;

  padding: 10px 15px;

  font-size: 14px;
`;

export const ReferenceItemInput = styled.input`
  width: 0;
  height: 0;

  -webkit-appearance: none;
  appearance: none;

  position: absolute;

  &:checked  ~ ${ReferenceItemLabel}{
    background-color: #ffc0cb;
  }

  &:checked ~ ${ReferenceItemMainTextBlock}{
    display:block;
  }
`;




export const ReferenceItemMainText = styled.p`
  margin: 0;

  margin: 10px;
  font-size: 18px;
  font-weight: 400;

  color:#513C2F;

`;


