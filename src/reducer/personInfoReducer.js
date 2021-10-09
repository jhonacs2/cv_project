export const personInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGUE_INFO':
      console.log(action.payload);
      return;
    default:
      return state;
  }
};
