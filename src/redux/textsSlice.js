import { createSlice} from '@reduxjs/toolkit';
import { initialState, setError } from './store';
import { fetchTexts, deleteTexts, addTexts } from './operations';

export const textsSlice = createSlice({
  name: 'texts',
  initialState,
  reducers: {

    setText: (state, action) => {
      state.texts.items.push(action.payload);
    },
    removeText: (state, action) => {
      let indexId = state.texts.items.findIndex(
        el => el.id === action.payload
      );

      if (indexId === -1) {
        return alert(`Item with ${action.id} not found`);
      }

      state.texts.items.splice(indexId, 1);
    },

    
  },
  extraReducers: builder => {
      builder.addCase(fetchTexts.pending, (state, _) =>{
        state.isLoading = true;
        state.error = '';
      })

      builder.addCase(fetchTexts.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.texts.items = action.payload;
      })

      builder.addCase(fetchTexts.rejected, () => setError)

      builder.addCase(deleteTexts.pending, (state, _) =>{
        state.isDeleting = true;
      })

      builder.addCase(deleteTexts.fulfilled, (state, _) =>{
        state.isDeleting = false;
      })

      builder.addCase(deleteTexts.rejected, () => setError)

      builder.addCase(addTexts.pending, (state, _) =>{
        state.isLoading = true;
        state.isAdd = true;
      })

      builder.addCase(addTexts.fulfilled, (state, _) =>{
        state.isLoading = false;
        state.isAdd = false;
      })

      builder.addCase(addTexts.rejected, () => setError)

  },
});

export const {  setText, removeText } = textsSlice.actions;
export default textsSlice.reducer;