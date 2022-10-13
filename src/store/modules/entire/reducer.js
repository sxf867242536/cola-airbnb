const initialState = {};
function reducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      console.log(state, payload);
      break;
  }
}
export default reducer;
