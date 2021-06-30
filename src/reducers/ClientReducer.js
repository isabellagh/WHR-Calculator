function clientReducer(state = [], action) {
  
  switch (action.type) {
    case "ADD_TRAINER":
      return [...state, action.trainer];

    default:
      return state;
  }
}

export default clientReducer;
