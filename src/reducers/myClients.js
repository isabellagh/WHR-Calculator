const myClients = (state = {clients: []}, action) => {
    // console.log(state);
  switch (action.type) {
    case "ADD_CLIENT":
      return {...state, clients: [...state.clients, action.client]}
    case "GET_MY_CLIENTS":
      return {...state, clients: action.clients}
    case "DELETE_CLIENT":
     const clientsLeft = state.clients.filter(c => action.clientId !== c.id)
      return {...state, clients: clientsLeft}
      // return {...state, clients: [...state.clients, action.clientId]}
    default:
      return state
  }
}

export default myClients

