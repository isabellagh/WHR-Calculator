export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "CLEAR_CURRENT_USER":
      return null
    default:
      return state
  }
}



// const ClientReducer = (state = {
//   clients: []
// }, action) => {
//   console.log("action", action)
  
//   switch (action.type) {
//     case "ADD_CLIENT":
//       return {...state, clients: [...state.clients, action.client]}

//     default:
//       return state
//   }
// }

// export default ClientReducer
