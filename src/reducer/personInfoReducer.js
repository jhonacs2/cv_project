export const personInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGUE_INFO':
      console.log(state.info);

      return { ...state, info: { ...action.payload } };
    default:
      return state;
  }
};
