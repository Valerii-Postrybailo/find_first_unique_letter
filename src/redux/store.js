export const initialState = {
  error: '',
  isLoading: false,
  isDeleting: false,
  isAdd: false,
  texts: {
    items: [],
  },
};

export const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};