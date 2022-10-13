const initialState = {};
function reducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return { ...state, payload };
  }
}
export default reducer;
