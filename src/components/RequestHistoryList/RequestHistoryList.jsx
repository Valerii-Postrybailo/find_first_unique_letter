import { useEffect } from 'react';

import { deleteTexts } from '../../redux/operations';
import { fetchTexts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { nanoid } from 'nanoid';

import { getUniqueLetter } from 'getUniqueLetter';

import {
  HistoryList,
  HistoryListItem, 
  DeleteItem,
  ListItemBottom, 
  UniqueLetterBlock} from './RequestHistoryList.styled';

export const RequestHistoryList = () => {
  const dispatch = useDispatch();
  const texts = useSelector(state => state.textsSlice.texts.items);

  const isLoading = useSelector(state => state.textsSlice.isLoading);
  const error = useSelector(state => state.textsSlice.error);

  useEffect(() => {
    dispatch(fetchTexts());
  }, [dispatch]);

  return(
    <HistoryList>
      {error && <li>{error}</li>}

      {isLoading && <Loader/>} 

      {texts.map(({id, text}) => (
        <HistoryListItem key = {nanoid()}>
          {text}
          <ListItemBottom>
            <UniqueLetterBlock>
              {getUniqueLetter(text) ? `Unique letter here: ${getUniqueLetter(text)}` : "There is no such letter..."}
            </UniqueLetterBlock>
            <DeleteItem type="button" onClick = {() => dispatch(deleteTexts(id))}>
              Delete
            </DeleteItem>
          </ListItemBottom>
        </HistoryListItem>
      ))}
    </HistoryList>
  );
};
