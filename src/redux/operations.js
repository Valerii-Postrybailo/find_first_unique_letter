import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeText, setText } from './textsSlice';

const BACK_END_ADDRESS = "https://63d7f2f35c4274b136feeed6.mockapi.io";

export const fetchTexts = createAsyncThunk(
  'texts/fetchTexts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BACK_END_ADDRESS}/texts`
      );

      if (!response.ok) {
        throw new Error('Error');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTexts = createAsyncThunk(
  'texts/deleteTexts',
  async function (id, { rejectWithValue, dispatch }) {
    try {
  
      if(!id){
        if(alert('You will be able to delete your last requests after this short page reload. This is how this backend works with fresh requests. Please, wait a few seconds and try to delete your requests again')){}
        else window.location.reload(); 
      } else{
        const response = await fetch(
          `${BACK_END_ADDRESS}/texts/${id}`,
          {
            method: 'DELETE',
          }
        );
  
        if (!response.ok) {
          throw new Error('Sorry we cant delete your text');
        }
      }
      

      dispatch(removeText(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTexts = createAsyncThunk(
  'texts/addText',
  async function (data, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `${BACK_END_ADDRESS}/texts/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error('Sorry cant add your text');
      }

      dispatch(setText(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);