
const clientReducer = (state = {
  clients: []
}, action) => {
  console.log("action", action)
  
  switch (action.type) {
    case "ADD_CLIENT":
      return {...state, clients: [...state.clients, action.client]}

    default:
      return state
  }
}

export default clientReducer
