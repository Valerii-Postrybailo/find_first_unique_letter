import styled from 'styled-components';

export const HistoryList = styled.ul`
  width: 90%;
  padding: 0;
  list-style: none;
  margin: 0 auto;
`;

export const HistoryListItem = styled.li`
  background-color:#fef266;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
`;

export const DeleteItem = styled.button`
  display: flex;
  margin-left: auto;
  padding: 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  margin-top: 7px;

  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: red;
  }

  background-color: orangered;
`;

export const ListItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UniqueLetterBlock = styled.div`
  background-color: #61ac27;
  padding: 9px;
  border-radius: 6px;
`;


