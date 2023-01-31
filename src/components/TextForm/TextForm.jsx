import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addTexts } from '../../redux/operations';

import {Form, TextArea,SubmitBtn} from './TextForm.styled';

export default function TextForm () {

  const dispatch = useDispatch();
  const texts = useSelector(texts => texts.textsSlice.texts.items);

  const [text, setText] = useState('');

  const userTextId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.target;
    // console.log(value)

    if (name === 'name') {
      return setText(value);
    } 
    return setText(value);
  };

  const reset = () => {
    setText('');
  };

  const onSubmitChange = evt => {
    evt.preventDefault();
    let data = { text};
    // console.log(data.text)
    
    let findName = texts.find(
      item => item.text.toLowerCase() === data.text.toLowerCase()
    );
    if (findName) {
      return alert(`You have checked this text before, check the history`);
    } else {
      dispatch(addTexts(data));
    // console.log(data.text)
    }

    reset();
  };
  const isAdded = useSelector(state => state.textsSlice.isAdded);
    return(
      <Form onSubmit={onSubmitChange}>
        <TextArea
          type="text"
          name="text"
          value={text} 
          id={userTextId}
          onChange={handleInputChange}
          rows="5" 
          placeholder="Your text here..."
          required
        >
        </TextArea>

        <SubmitBtn type="submit" disabled={isAdded}>Find unique letter</SubmitBtn>
      </Form>
  );
};