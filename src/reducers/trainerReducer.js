const trainerReducer = (state = {users: [] }, action) => {
//    debugger;
    switch (action.type) {
      case "FETCH_TRAINERS":
        return {...state, users: action.payload}
      default:
        return state
    }
}

export default trainerReducer