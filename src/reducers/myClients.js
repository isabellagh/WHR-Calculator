const myClients = (state = {clients: []}, action) => {
    console.log(state);
  switch (action.type) {
    case "ADD_CLIENT":
      return {...state, clients: [...state.clients, action.client]}
    case "GET_MY_CLIENTS":
      return {...state, clients: action.clients}
      default:
        return state
  }
}

export default myClients

