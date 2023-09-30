const initialState = {
  statuses: ['queue', 'develop', 'done']
};

const infoReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default infoReducer;
